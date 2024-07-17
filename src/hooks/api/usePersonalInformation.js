import useAsync from "../useAsync";
import useToken from "../useToken";

import * as userApi from "../../services/userApi";

export default function usePersonalInformation() {
  const token = useToken();

  const {
    data: personalInformation,
    loading: personalInformationLoading,
    error: personalInformationError,
    act: getPersonalInformation,
  } = useAsync(() => userApi.getPersonalInformation(token), false);

  return {
    personalInformation,
    personalInformationLoading,
    personalInformationError,
    getPersonalInformation,
  };
}
