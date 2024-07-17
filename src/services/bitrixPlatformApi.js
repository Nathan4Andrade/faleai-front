import api from "./api";

export async function getMyBitrixData(token) {
  const response = await api.get("/bitrixPlatform/getMyData", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function createOrUpdateBitrixPlatform(token, data) {
  const response = await api.post("/bitrixPlatform/createOrUpdate", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}


