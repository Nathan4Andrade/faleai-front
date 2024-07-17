// .post("/create", validateBody(createBotSchema), createChatbot)
// .get("/:id", getChatbot)
// .post("/interact/:id", interactWithChatbot);

import api from "./api";

export async function createChatbot(token, data) {
  const response = await api.post("/chatbot/create", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getChatbot(token, id) {
  const response = await api.get(`/chatbot/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function interactWithChatbot(token, id, data) {
  const response = await api.post(`/chatbot/interact/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
