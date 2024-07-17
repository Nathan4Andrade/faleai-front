import useAsync from "../useAsync";
import useToken from "../useToken";

import * as chatbotApi from "../../services/chatbotApi";

export default function useGetAllChatbots() {
  const token = useToken();

  const {
    loading: getAllChatbotLoading,
    error: getAllChatbotError,
    act: getAllChatbot,
    data: allChatbot,
  } = useAsync(() => chatbotApi.getAllChatbot(token), false);

  return {
    getAllChatbotLoading,
    getAllChatbotError,
    getAllChatbot,
    allChatbot,
  };
}
