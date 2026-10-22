import { useState, useEffect } from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import LandingPage from "./components/LandingPage.jsx";
import DashboardPage from "./components/DashboardPage.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import ConfigBanner from "./components/ConfigBanner.jsx";
import "./App.css";

function App() {
  const { state, signIn, signOut, getBasicUserInfo, getAccessToken, getDecodedIDToken } =
    useAuthContext();
  const [userInfo, setUserInfo] = useState(null);
  const [decodedToken, setDecodedToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  // Fetch user details after login
  useEffect(() => {
    if (state.isAuthenticated) {
      setIsLoadingUser(true);
      Promise.all([
        getBasicUserInfo(),
        getDecodedIDToken(),
        getAccessToken(),
      ])
        .then(([basic, decoded, token]) => {
          setUserInfo(basic);
          setDecodedToken(decoded);
          setAccessToken(token);
        })
        .catch((err) => {
          console.error("Failed to fetch user info:", err);
        })
        .finally(() => setIsLoadingUser(false));
    } else {
      setUserInfo(null);
      setDecodedToken(null);
      setAccessToken(null);
    }
  }, [state.isAuthenticated]);

  // Show loading screen during auth flow
  if (state.isLoading || isLoadingUser) {
    return <LoadingScreen />;
  }

  return (
    <div className="app">
      <ConfigBanner />
      {state.isAuthenticated ? (
        <DashboardPage
          userInfo={userInfo}
          decodedToken={decodedToken}
          accessToken={accessToken}
          authState={state}
          onSignOut={signOut}
        />
      ) : (
        <LandingPage onSignIn={signIn} />
      )}
    </div>
  );
}

export default App;
