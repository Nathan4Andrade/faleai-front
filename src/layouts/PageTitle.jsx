import { Typography } from "@mui/material";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function PageTitle({ children }) {
  return <StyledTypography variant="h4">{children}</StyledTypography>;
}

const StyledTypography = styled(Typography)`
  margin-bottom: 16px !important;
`;
