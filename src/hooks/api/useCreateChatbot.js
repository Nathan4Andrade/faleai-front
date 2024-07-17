import useAsync from "../useAsync";
import useToken from "../useToken";

import * as chatbotApi from "../../services/chatbotApi";

export default function useCreateChatbot() {
  const token = useToken();

  const {
    loading: createChatbotLoading,
    error: createChatbotError,
    act: createChatbot,
  } = useAsync((data) => chatbotApi.createChatbot(token, data), false);

  return {
    createChatbotLoading,
    createChatbotError,
    createChatbot,
  };
}
