/* eslint-disable react/prop-types */
import { Card, CardContent, Stack, Typography } from "@mui/material";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import useCreateOrUpdateBitrixPlatform from "../../hooks/api/useCreateOrUpdateBitrixPlatform";

export default function AddBitrixPlatform({
  getPersonalInformation,
  setPersonalInformation,
}) {
  const [newUrl, setNewUrl] = useState("");
  const { createOrUpdateBitrixPlatform } = useCreateOrUpdateBitrixPlatform();

  const handleCreateOrUpdateBitrixPlatform = async () => {
    const validUrl2 = newUrl.endsWith("/");
    const validUrl3 = newUrl.includes("bitrix24");

    let fixedUrl = null;

    if (!validUrl3) {
      toast.error("URL inválida");
      return;
    }

    if (!validUrl2) {
      fixedUrl = newUrl + "/";
    }

    try {
      if (fixedUrl) {
        await createOrUpdateBitrixPlatform({ url: fixedUrl });
      } else {
        await createOrUpdateBitrixPlatform({ url: newUrl });
      }
      const resp = await getPersonalInformation();
      setPersonalInformation(resp);
      toast.success("Bitrix24 integrado com sucesso!");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 400, minWidth: 300 }}>
      <CardContent>
        <Stack
          direction={{ xs: "column", sm: "column" }}
          spacing={{ xs: 1, sm: 1, md: 1 }}>
          <Typography sx={{ textWrap: true }}>
            <strong>Integrar com o Bitrix24</strong>
          </Typography>

          <Input
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="Copie e cole o seu endereço Bitrix24"></Input>
          <Button onClick={() => handleCreateOrUpdateBitrixPlatform()}>
            Cadastrar
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
