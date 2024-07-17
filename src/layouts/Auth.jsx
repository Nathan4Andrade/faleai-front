/* eslint-disable react/prop-types */
import Page from "../components/Page";
import { StyledContainer } from "../components/Auth";

export default function AuthLayout({ children }) {
  return (
    <Page $background="linear-gradient(90deg, #1F5785 0.17%, #3A77B7 50%, #5F9EDC 99.83%)">
      <StyledContainer width="400px" height="650px">
        {children}
      </StyledContainer>
    </Page>
  );
}
