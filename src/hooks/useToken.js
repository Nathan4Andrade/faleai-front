import { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function useToken() {
  const { userData: user } = useContext(UserContext);
  const navigate = useNavigate();

  const isTokenExpired = () => {
    const currentTime = dayjs().toDate();
    const expiredTime = dayjs(user.expiresAt).toDate();
    const isAfter = dayjs(currentTime).isAfter(expiredTime);
    return isAfter;
  };

  useEffect(() => {
    if (!user || !user.token || isTokenExpired()) {
      localStorage.removeItem("userData");
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check if user and user.token are defined
  if (!user || !user.token) {
    return null;
  }

  return user.token;
}
