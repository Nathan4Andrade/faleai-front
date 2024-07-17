/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Drawer,
  Button as MUIButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { CiHome } from "react-icons/ci";
import { LiaSignOutAltSolid } from "react-icons/lia";

import NavigationButton from "./NavigationButton";
import UserContext from "../../../contexts/UserContext";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export default function NavigationBar({ paymentStatus, role = "MANAGER" }) {
  const location = useLocation();

  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);

  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openConfirmationDialog = () => {
    setConfirmationOpen(true);
  };

  function handleLogout() {
    if (userData) setUserData(null);
    navigate("/");
  }

  function isActive(buttonPath) {
    return location.pathname === buttonPath;
  }

  const renderButtons = () => {
    if (paymentStatus) {
      if (role === "MASTER") {
        return (
          <div onClick={() => setDrawerOpen(false)}>
            <Link to="/dashboard">
              <NavigationButton active={isActive("/dashboard")}>
                <CiHome />
              </NavigationButton>
            </Link>
            {/* <Link to="/dashboard/profile">
              <NavigationButton active={isActive("/dashboard/profile")}>
                <CiUser />
              </NavigationButton>
            </Link> */}
            <div onClick={() => openConfirmationDialog()}>
              <NavigationButton active={isActive("/")}>
                <LiaSignOutAltSolid color="red" />
              </NavigationButton>
            </div>
          </div>
        );
      }
      if (role === "MANAGER" || role === "SUBADMIN") {
        return (
          <div onClick={() => setDrawerOpen(false)}>
            <Link to="/dashboard">
              <NavigationButton active={isActive("/dashboard")}>
                <CiHome />
              </NavigationButton>
            </Link>
            {/* <Link to="/dashboard/profile">
              <NavigationButton active={isActive("/dashboard/profile")}>
                <CiUser />
              </NavigationButton>
            </Link> */}
            <div onClick={() => openConfirmationDialog()}>
              <NavigationButton active={isActive("/")}>
                <LiaSignOutAltSolid color="red" />
              </NavigationButton>
            </div>
          </div>
        );
      }
      return (
        <div onClick={() => setDrawerOpen(false)}>
          <Link to="/dashboard">
            <NavigationButton active={isActive("/dashboard")}>
              <CiHome />
            </NavigationButton>
          </Link>
          {/* <Link to="/dashboard/profile">
            <NavigationButton active={isActive("/dashboard/profile")}>
              <CiUser />
            </NavigationButton>
          </Link> */}

          <div onClick={() => openConfirmationDialog()}>
            <NavigationButton active={isActive("/")}>
              <LiaSignOutAltSolid color="red" />
            </NavigationButton>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <Link to="/dashboard">
            <NavigationButton active={isActive("/dashboard")}>
              <CiHome />
            </NavigationButton>
          </Link>
          {/* <Link to="/dashboard/profile">
            <NavigationButton active={isActive("/dashboard/profile")}>
              <CiUser />
            </NavigationButton>
          </Link> */}
          <div onClick={() => openConfirmationDialog()}>
            <NavigationButton active={isActive("/")}>
              <LiaSignOutAltSolid color="red" />
            </NavigationButton>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <MobileMenuButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </MobileMenuButton>
      <StyledDrawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}>
        {/* <img
          src={logo}
          alt="logo"
          style={{ width: "200px", padding: "20px" }}
        /> */}
        {renderButtons()}
      </StyledDrawer>
      <Container>
        {renderButtons()}
        <LogoutDialog
          confirmationOpen={confirmationOpen}
          setConfirmationOpen={setConfirmationOpen}
          handleLogout={handleLogout}
        />
      </Container>
    </>
  );
}

const MobileMenuButton = styled(Button)`
  display: none !important;

  @media (max-width: 600px) {
    width: 100%;
    display: flex !important;
    justify-content: flex-start !important;
    padding-bottom: 20px;

    position: absolute !important;
    top: 0;
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 100px;
  }
  a {
    text-decoration: none !important;
  }
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.1);
  width: 100px;
  flex-shrink: 0;
  justify-content: flex-start;

  a {
    text-decoration: none !important;
  }

  @media (max-width: 600px) {
    display: none;
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: space-around;
    span {
      display: none;
    }
  }
`;

const LogoutDialog = ({
  confirmationOpen,
  setConfirmationOpen,
  handleLogout,
}) => {
  return (
    <Dialog
      open={confirmationOpen}
      onClose={() => setConfirmationOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">Logout</DialogTitle>

      <DialogActions>
        <MUIButton
          variant="text"
          color="error"
          onClick={() => setConfirmationOpen(false)}>
          <CloseIcon />
        </MUIButton>
        <MUIButton
          variant="outlined"
          onClick={() => {
            setConfirmationOpen(false);
            handleLogout();
          }}
          color="primary"
          autoFocus>
          <CheckIcon />
        </MUIButton>
      </DialogActions>
    </Dialog>
  );
};
