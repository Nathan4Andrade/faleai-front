import useAsync from "../useAsync";

import * as appFaleAiApi from "../../services/appFaleAiApi";

export default function useAppPoint() {
  const {
    data: appFaleAi,
    loading: appFaleAiLoading,
    error: appFaleAiError,
  } = useAsync(appFaleAiApi.getAppFaleAi);

  return {
    appFaleAi,
    appFaleAiLoading,
    appFaleAiError,
  };
}
