import useAsync from "../useAsync";

import * as bitrixPlatformApi from "../../services/bitrixPlatformApi";
import useToken from "../useToken";

export default function useCreateOrUpdateBitrixPlatform() {
  const token = useToken();
  const {
    loading: createOrUpdateBitrixPlatformLoading,
    error: createOrUpdateBitrixPlatformError,
    act: createOrUpdateBitrixPlatform,
  } = useAsync(
    (data) => bitrixPlatformApi.createOrUpdateBitrixPlatform(token, data),
    false
  );

  return {
    createOrUpdateBitrixPlatformLoading,
    createOrUpdateBitrixPlatformError,
    createOrUpdateBitrixPlatform,
  };
}
