/* eslint-disable react/prop-types */
import { Card, CardContent, Typography } from "@mui/material";
import AddBitrixPlatform from "../../components/BitrixPlatform/AddBitrixPlatform";

export default function Profile({
  personalInformation,
  getPersonalInformation,
  setPersonalInformation,
}) {
  return (
    personalInformation && (
      <>
        <Typography variant="h4">Perfil</Typography>
        <Card variant="outlined" sx={{ maxWidth: 400, minWidth: 300 }}>
          <CardContent>
            <Typography>
              <strong>Email:</strong> {personalInformation.email}
            </Typography>
            <Typography>
              <strong>BitrixURL: </strong>{" "}
              {personalInformation.bitrixPlatform
                ? personalInformation.bitrixPlatform.url
                : "Não cadastrado"}
            </Typography>
          </CardContent>
        </Card>
        {!personalInformation.bitrixPlatform && (
          <AddBitrixPlatform
            getPersonalInformation={getPersonalInformation}
            setPersonalInformation={setPersonalInformation}
          />
        )}
      </>
    )
  );
}
