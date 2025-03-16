import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Nist_test from "./scenes/nist_test";
import Nist_tests90b from "./scenes/nist_test90b";
import Qrng_Server from "./scenes/qrng_server";
import Dieharder_tests from "./scenes/dieharder_tests";

import UploadReport from "./scenes/reportAnalysis/UploadReport";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from 'axios';
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("accessToken"));

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    if (isLoggedIn) {
      const checkLoggedInUser = async () => {
        try {
          const token = localStorage.getItem("accessToken");
          if (token) {
            const config = {
              headers: {
                "Authorization": `Bearer ${token}`,
              },
            };
            const response = await axios.get("http://127.0.0.1:8000/api/user/", config);
            setUsername(response.data.username);
          } else {
            setIsLoggedIn(false);
            setUsername("");
          }
        } catch (error) {
          setIsLoggedIn(false);
          setUsername("");
        }
      };
      checkLoggedInUser();
    }
  }, [isLoggedIn]);


  const PrivateRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/login" />;
  };

  const ProtectedRouteRedirect = ({ element }) => {
    return isLoggedIn ? <Navigate to="/" /> : element;
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isLoggedIn && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {isLoggedIn && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
              <Route path="/nist_test" element={<PrivateRoute element={<Nist_test />} />} />
              <Route path="/nist_test90b" element={<PrivateRoute element={<Nist_tests90b />} />} />
              <Route path="/die_harder_tests" element={<PrivateRoute element={<Dieharder_tests />} />} />
             <Route path="/qrng_server" element={<PrivateRoute element={<Qrng_Server />} />} />
             
              <Route path="/report" element={<PrivateRoute element={<UploadReport />} />} />
              <Route path="/login" element={<ProtectedRouteRedirect element={<Login setIsLoggedIn={setIsLoggedIn} />} />} />
              <Route path="/register" element={<ProtectedRouteRedirect element={<Register />} />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
