/* eslint-disable react/prop-types */
import { Card, CardContent, Stack, Typography } from "@mui/material";
import PageTitle from "../../layouts/PageTitle";

export default function MyChatbot({ chatbots }) {
  return (
    <Stack>
      <PageTitle>Seu chatbot</PageTitle>
      <Stack spacing={2}>
        {chatbots?.map((chatbot) => (
          <Card
            variant="outlined"
            key={chatbot.id}
            sx={{
              maxWidth: 400,
              minWidth: 300,
              height: 565,
              overflow: "auto",
              overflowX: "hidden",
            }}>
            <CardContent>
              <Typography variant="h5" color="primary" sx={{ marginBottom: 2 }}>
                {chatbot.name}
              </Typography>
              <Typography variant="body1">{chatbot.prompt}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
