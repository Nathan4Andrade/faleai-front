import { Outlet } from "react-router-dom";
import styled from "styled-components";

import NavigationBar from "../../components/Dashboard/NavigationBar";

import DashboardLayout from "../../layouts/Dashboard";

export default function Dashboard() {
  return (
    <DashboardLayout background="linear-gradient(90deg, #1F5785 0.17%, #3A77B7 50%, #5F9EDC 99.83%)">
      <NavigationBar />
      <Container>
        <Outlet />
      </Container>
    </DashboardLayout>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100vh - 40px);
    padding: 20px;
  }
`;
