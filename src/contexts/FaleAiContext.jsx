/* eslint-disable react/prop-types */
import { createContext } from "react";

import Splash from "../components/Splash";

import useAppFaleAi from "../hooks/api/useAppFaleAi";

const FaleAiContext = createContext();
export default FaleAiContext;

export function FaleAiProvider({ children }) {
  const { appFaleAi, appFaleAiError, appFaleAiLoading } = useAppFaleAi();

  if (appFaleAiLoading) {
    return <Splash loading />;
  }

  if (appFaleAiError) {
    let message = appFaleAiError.response
      ? appFaleAiError.response.data.message
      : "Could not connect to server. Please try again later.";
    return <Splash message={message} />;
  }

  return (
    <FaleAiContext.Provider
      value={{ appFaleAi: appFaleAi, appFaleAiError: appFaleAiError }}>
      {children}
    </FaleAiContext.Provider>
  );
}
