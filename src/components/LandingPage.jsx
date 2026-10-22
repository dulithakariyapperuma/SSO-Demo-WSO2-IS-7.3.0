import "./LandingPage.css";

function LandingPage({ onSignIn }) {
  return (
    <div className="landing">
      {/* Animated Background */}
      <div className="landing__bg">
        <div className="landing__orb landing__orb--1" />
        <div className="landing__orb landing__orb--2" />
        <div className="landing__orb landing__orb--3" />
      </div>

      {/* Top Cross-App Navigation Pill */}
      <div style={{
        zIndex: 10,
        marginBottom: '16px',
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(200, 16, 46, 0.3)',
        borderRadius: '30px',
        padding: '8px 18px',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '0.85rem',
        color: '#e2e8f0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        <span style={{
          background: 'linear-gradient(135deg, #C8102E, #8B0000)',
          color: '#ffffff',
          fontWeight: 700,
          padding: '2px 8px',
          borderRadius: '12px',
          fontSize: '0.72rem',
          letterSpacing: '0.5px'
        }}>
          APP 1 · PORT 5173
        </span>
        <span>OCBC Retail Banking Portal</span>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
        <a
          href="http://localhost:5176"
          target="_blank"
          rel="noreferrer"
          style={{
            color: '#E5A93C',
            textDecoration: 'none',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          Open App 2 (Premier & Wealth: 5176) ↗
        </a>
      </div>

      {/* Glass Card */}
      <div className="landing__card">
        {/* Header */}
        <div className="landing__header">
          <div className="landing__logo">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="14" fill="#C8102E" />
              <text x="8" y="34" fontFamily="Georgia, serif" fontSize="22" fontWeight="bold" fill="white">OCBC</text>
            </svg>
          </div>
          <div className="landing__header-text">
            <h1 className="landing__brand">OCBC Indonesia</h1>
            <p className="landing__tagline">Mobile Banking Portal</p>
          </div>
        </div>

        <div className="landing__divider" />

        {/* Hero */}
        <div className="landing__hero">
          <div className="landing__shield">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <path d="M28 4L8 12V28C8 39.05 16.8 49.4 28 52C39.2 49.4 48 39.05 48 28V12L28 4Z"
                fill="url(#shieldGrad)" />
              <path d="M21 28L26 33L36 22" stroke="white" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="shieldGrad" x1="8" y1="4" x2="48" y2="52"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C8102E" />
                  <stop offset="1" stopColor="#8B0000" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h2 className="landing__title">Secure Single Sign-On</h2>
          <p className="landing__subtitle">
            Powered by <span className="landing__highlight">WSO2 Identity Server 7.3</span>
          </p>
          <p className="landing__description">
            Enterprise-grade authentication with OpenID Connect (OIDC) and
            PKCE Authorization Code Flow — protecting your banking sessions with
            industry-leading identity management.
          </p>
        </div>

        {/* Feature badges */}
        <div className="landing__features">
          <div className="landing__feature">
            <span className="landing__feature-icon">🔐</span>
            <span>OIDC + PKCE</span>
          </div>
          <div className="landing__feature">
            <span className="landing__feature-icon">🛡️</span>
            <span>Zero Trust</span>
          </div>
          <div className="landing__feature">
            <span className="landing__feature-icon">⚡</span>
            <span>Instant Auth</span>
          </div>
          <div className="landing__feature">
            <span className="landing__feature-icon">🏦</span>
            <span>Bank Grade</span>
          </div>
        </div>

        {/* CTA */}
        <button
          id="sign-in-btn"
          className="landing__cta"
          onClick={() => onSignIn()}
        >
          <span className="landing__cta-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 10H4M13 10L9 6M13 10L9 14" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 3H12M17 3V17M17 17H12" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          Sign In with WSO2 IS
        </button>

        <p className="landing__footer-text">
          You will be redirected to the WSO2 Identity Server login page
        </p>

        {/* WSO2 Badge */}
        <div className="landing__wso2-badge">
          <div className="landing__wso2-dot" />
          <span>WSO2 IS 7.3 · OIDC Authorization Code + PKCE</span>
        </div>
      </div>

      {/* Bottom info */}
      <p className="landing__bottom-note">
        Demo for OCBC Indonesia · Built with @asgardeo/auth-react SDK
      </p>
    </div>
  );
}

export default LandingPage;
