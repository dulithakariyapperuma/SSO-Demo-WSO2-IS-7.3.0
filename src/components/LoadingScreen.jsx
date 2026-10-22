import "./LoadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading">
      <div className="loading__card">
        <div className="loading__spinner">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="loading__svg">
            <circle cx="24" cy="24" r="20" stroke="rgba(200,16,46,0.2)" strokeWidth="4" />
            <path d="M24 4A20 20 0 0 1 44 24" stroke="#C8102E" strokeWidth="4"
              strokeLinecap="round" />
          </svg>
        </div>
        <div className="loading__logo">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#C8102E" />
            <text x="6" y="32" fontFamily="Georgia, serif" fontSize="18" fontWeight="bold" fill="white">OCBC</text>
          </svg>
        </div>
        <p className="loading__text">Authenticating via WSO2 IS 7.3…</p>
        <p className="loading__subtext">OIDC Authorization Code + PKCE</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
