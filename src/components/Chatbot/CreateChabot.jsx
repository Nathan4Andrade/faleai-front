/* eslint-disable react/prop-types */
import { Button, TextField, FormControl, Box } from "@mui/material";

import { useState } from "react";
import useCreateChatbot from "../../hooks/api/useCreateChatbot";
import PageTitle from "../../layouts/PageTitle";

export default function CreateChatbot({
  setPersonalInformation,
  getPersonalInformation,
}) {
  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState("");
  const { createChatbot, createChatbotLoading, createChatbotError } =
    useCreateChatbot();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createChatbot({ name, prompt });
      console.log("Chatbot created!");
      setName("");
      setPrompt("");
      const resp = await getPersonalInformation();
      setPersonalInformation(resp);
    } catch (err) {
      console.log(createChatbotError);
      console.error(err);
    }
  };

  return (
    <Box>
      <PageTitle variant="h4">Criar chatbot</PageTitle>
      <FormControl sx={{ gap: 2, maxWidth: 400, minWidth: 300 }} fullWidth>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Prompt"
          fullWidth
          multiline
          maxRows={10}
          rows={10}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <Button
          type="submit"
          fullWidth
          disabled={createChatbotLoading}
          onClick={handleSubmit}>
          Create
        </Button>
      </FormControl>
    </Box>
  );
}
