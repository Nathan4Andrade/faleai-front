/* eslint-disable react/prop-types */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FaleAiProvider } from "./contexts/FaleAiContext";
import { UserProvider } from "./contexts/UserContext";

import useToken from "./hooks/useToken";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Dashboard/Chatbot";

export default function App() {
  return (
    <>
      <ToastContainer />
      <FaleAiProvider>
        <UserProvider>
          <Router basename="/faleai">
            <Routes>
              <Route path="/" element={<SignIn />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRouteGuard>
                    <Dashboard />
                  </ProtectedRouteGuard>
                }>
                <Route path="" element={<Chatbot />} />

                <Route index path="*" element={<Navigate to="/dashboard/" />} />
              </Route>
            </Routes>
          </Router>
        </UserProvider>
      </FaleAiProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
