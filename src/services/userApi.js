import api from "./api";

export async function createUser(token, data) {
  const response = await api.post("/user/create", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

// export async function getUserById(token, id) {
//   const response = await api.get(`/user/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// }

export async function getPersonalInformation(token) {
  const response = await api.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
