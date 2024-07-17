import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import CreateChatbot from "../../../components/Chatbot/CreateChabot";
import PageTitle from "../../../layouts/PageTitle";
import usePersonalInformation from "../../../hooks/api/usePersonalInformation";
import { useEffect, useState } from "react";
import Profile from "../../../components/Profile";
import MyChatbot from "../../../components/Chatbot/MyChatbots";

export default function ChatbotPage() {
  const {
    getPersonalInformation,
    personalInformationError,
    personalInformationLoading,
  } = usePersonalInformation();
  const [personalInformation, setPersonalInformation] = useState();

  useEffect(() => {
    (async () => {
      try {
        const resp = await getPersonalInformation();
        setPersonalInformation(resp);
        console.log(resp);
      } catch {
        console.log(personalInformationError);
        console.error("Error");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  personalInformationLoading && <p>Carregando...</p>;

  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 6 }}>
      <Stack sx={{ maxWidth: 400 }} spacing={2}>
        <Profile
          personalInformation={personalInformation}
          setPersonalInformation={setPersonalInformation}
          getPersonalInformation={getPersonalInformation}
        />
        <Box>
          <PageTitle variant="h4">Como funciona?</PageTitle>
          <Card variant="outlined" sx={{ maxWidth: 400, minWidth: 300 }}>
            <CardContent>
              <Typography variant="body1">
                Para criar um chatbot, você precisa fornecer um nome e um
                prompt. O chatbot irá responder a essa mensagem sempre que for
                acionado.
              </Typography>
              <Typography variant="body1">
                O chatbot é uma ferramenta de automação de mensagens que pode
                ser utilizada para responder a perguntas frequentes, agendar
                atendimentos, entre outras funcionalidades.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Stack>
      {personalInformation?.chatbot?.length === 0 ? (
        <CreateChatbot
          personalInformation={personalInformation}
          setPersonalInformation={setPersonalInformation}
          getPersonalInformation={getPersonalInformation}
        />
      ) : (
        <MyChatbot chatbots={personalInformation?.chatbot} />
      )}
    </Stack>
  );
}
