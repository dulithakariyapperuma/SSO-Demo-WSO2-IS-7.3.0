import { useState } from "react";
import "./DashboardPage.css";

function DashboardPage({ userInfo, decodedToken, accessToken, authState, onSignOut }) {
  const [activeTab, setActiveTab] = useState("profile");
  const [tokenVisible, setTokenVisible] = useState(false);

  const displayName =
    userInfo?.displayName ||
    userInfo?.givenName ||
    userInfo?.username ||
    authState?.username ||
    "User";

  const email =
    userInfo?.email ||
    decodedToken?.email ||
    "—";

  const sub = decodedToken?.sub || "—";
  const iss = decodedToken?.iss || "—";
  const aud = decodedToken?.aud || "—";
  const exp = decodedToken?.exp
    ? new Date(decodedToken.exp * 1000).toLocaleString()
    : "—";
  const iat = decodedToken?.iat
    ? new Date(decodedToken.iat * 1000).toLocaleString()
    : "—";

  const maskToken = (t) =>
    t ? `${t.substring(0, 12)}${"•".repeat(20)}${t.substring(t.length - 8)}` : "—";

  return (
    <div className="dash">
      {/* Animated Background */}
      <div className="dash__bg">
        <div className="dash__orb dash__orb--1" />
        <div className="dash__orb dash__orb--2" />
      </div>

      {/* Navbar */}
      <nav className="dash__nav">
        <div className="dash__nav-brand">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#C8102E" />
            <text x="6" y="32" fontFamily="Georgia, serif" fontSize="18" fontWeight="bold" fill="white">OCBC</text>
          </svg>
          <span>OCBC Indonesia</span>
        </div>

        <div className="dash__nav-actions">
          <div className="dash__nav-status">
            <div className="dash__status-dot" />
            <span>SSO Active</span>
          </div>
          <button
            id="sign-out-btn"
            className="dash__signout-btn"
            onClick={() => onSignOut()}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 13H3a1 1 0 01-1-1V4a1 1 0 011-1h3M10 10l3-2-3-2M13 8H6"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Sign Out
          </button>
        </div>
      </nav>

      {/* Cross-App SSO Banner Bar */}
      <div style={{
        background: 'linear-gradient(90deg, rgba(200,16,46,0.18), rgba(229,169,60,0.12))',
        borderBottom: '1px solid rgba(200,16,46,0.35)',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.86rem',
        color: '#f8fafc',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            background: 'linear-gradient(135deg, #C8102E, #8B0000)',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '0.72rem',
            padding: '2px 8px',
            borderRadius: '10px'
          }}>APP 1</span>
          <span><strong>Retail Banking Portal (:5173)</strong> — Active WSO2 IS session ready for cross-app SSO!</span>
        </div>
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
          Open App 2: Premier & Wealth Portal (:5176) ↗
        </a>
      </div>

      <div className="dash__content">
        {/* Welcome Hero */}
        <div className="dash__hero">
          <div className="dash__avatar">
            {displayName.charAt(0).toUpperCase()}
          </div>
          <div className="dash__hero-text">
            <h2 className="dash__welcome">Welcome back,</h2>
            <h1 className="dash__username">{displayName}</h1>
            <p className="dash__email">{email}</p>
          </div>
          <div className="dash__hero-badge">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1.5L2.25 4.5V9C2.25 12.7425 5.1225 16.245 9 17.25C12.8775 16.245 15.75 12.7425 15.75 9V4.5L9 1.5Z" fill="rgba(200,16,46,0.2)" stroke="#C8102E" strokeWidth="1.5" />
              <path d="M6.5 9.5L8 11L11.5 7.5" stroke="#C8102E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Authenticated via WSO2 IS 7.3
          </div>
        </div>

        {/* Stat Cards */}
        <div className="dash__stats">
          <div className="dash__stat">
            <div className="dash__stat-icon dash__stat-icon--green">✓</div>
            <div>
              <div className="dash__stat-label">Authentication</div>
              <div className="dash__stat-value dash__stat-value--green">Verified</div>
            </div>
          </div>
          <div className="dash__stat">
            <div className="dash__stat-icon dash__stat-icon--blue">🔑</div>
            <div>
              <div className="dash__stat-label">Flow</div>
              <div className="dash__stat-value">OIDC + PKCE</div>
            </div>
          </div>
          <div className="dash__stat">
            <div className="dash__stat-icon dash__stat-icon--purple">🏦</div>
            <div>
              <div className="dash__stat-label">Provider</div>
              <div className="dash__stat-value">WSO2 IS 7.3</div>
            </div>
          </div>
          <div className="dash__stat">
            <div className="dash__stat-icon dash__stat-icon--orange">🛡️</div>
            <div>
              <div className="dash__stat-label">Session</div>
              <div className="dash__stat-value dash__stat-value--green">Active</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="dash__tabs">
          <button
            id="tab-profile"
            className={`dash__tab ${activeTab === "profile" ? "dash__tab--active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            👤 User Profile
          </button>
          <button
            id="tab-token"
            className={`dash__tab ${activeTab === "token" ? "dash__tab--active" : ""}`}
            onClick={() => setActiveTab("token")}
          >
            🪙 ID Token
          </button>
          <button
            id="tab-oidc"
            className={`dash__tab ${activeTab === "oidc" ? "dash__tab--active" : ""}`}
            onClick={() => setActiveTab("oidc")}
          >
            📡 OIDC Info
          </button>
          <button
            id="tab-raw"
            className={`dash__tab ${activeTab === "raw" ? "dash__tab--active" : ""}`}
            onClick={() => setActiveTab("raw")}
          >
            🔍 Raw Claims
          </button>
        </div>

        {/* Tab Content */}
        <div className="dash__panel">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="dash__profile-grid">
              <ClaimRow label="Display Name" value={displayName} icon="👤" />
              <ClaimRow label="Email" value={email} icon="📧" />
              <ClaimRow label="Given Name" value={userInfo?.givenName || "—"} icon="🪪" />
              <ClaimRow label="Last Name" value={userInfo?.lastName || "—"} icon="🪪" />
              <ClaimRow label="Username" value={authState?.username || "—"} icon="🔤" />
              <ClaimRow label="Subject (sub)" value={sub} icon="🆔" mono />
            </div>
          )}

          {/* ID Token Tab */}
          {activeTab === "token" && (
            <div className="dash__token-section">
              <div className="dash__section-header">
                <h3 className="dash__section-title">Decoded ID Token Claims</h3>
                <p className="dash__section-desc">
                  JWT Claims returned from WSO2 IS 7.3 after successful OIDC authentication
                </p>
              </div>
              <div className="dash__claim-grid">
                <ClaimRow label="Issuer (iss)" value={iss} icon="🏛️" mono />
                <ClaimRow label="Subject (sub)" value={sub} icon="🆔" mono />
                <ClaimRow label="Audience (aud)" value={Array.isArray(aud) ? aud.join(", ") : aud} icon="🎯" mono />
                <ClaimRow label="Issued At (iat)" value={iat} icon="🕐" />
                <ClaimRow label="Expires At (exp)" value={exp} icon="⏰" />
                <ClaimRow label="Email" value={email} icon="📧" />
              </div>

              <div className="dash__token-display">
                <div className="dash__token-header">
                  <span>Access Token</span>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      id="toggle-token-visibility"
                      className="dash__token-toggle"
                      onClick={() => setTokenVisible((v) => !v)}
                    >
                      {tokenVisible ? "🙈 Hide" : "👁 Show"}
                    </button>
                    {accessToken && (
                      <button
                        id="copy-token-btn"
                        className="dash__token-toggle"
                        onClick={() => navigator.clipboard.writeText(accessToken)}
                      >
                        📋 Copy
                      </button>
                    )}
                  </div>
                </div>
                <code className="dash__token-value">
                  {tokenVisible ? accessToken || "—" : maskToken(accessToken)}
                </code>
              </div>
            </div>
          )}

          {/* OIDC Info Tab */}
          {activeTab === "oidc" && (
            <div>
              <div className="dash__section-header">
                <h3 className="dash__section-title">WSO2 IS 7.3 OIDC Endpoints</h3>
                <p className="dash__section-desc">
                  Standard OpenID Connect endpoints provided by your WSO2 Identity Server instance
                </p>
              </div>
              <div className="dash__endpoints">
                <EndpointRow label="Well-Known Configuration" url={`${iss}/.well-known/openid-configuration`} />
                <EndpointRow label="Authorization Endpoint" url={`https://localhost:9443/oauth2/authorize`} />
                <EndpointRow label="Token Endpoint" url={`https://localhost:9443/oauth2/token`} />
                <EndpointRow label="UserInfo Endpoint" url={`https://localhost:9443/oauth2/userinfo`} />
                <EndpointRow label="JWKS Endpoint" url={`https://localhost:9443/oauth2/jwks`} />
                <EndpointRow label="Revoke Endpoint" url={`https://localhost:9443/oauth2/revoke`} />
                <EndpointRow label="Logout Endpoint" url={`https://localhost:9443/oidc/logout`} />
                <EndpointRow label="Introspect Endpoint" url={`https://localhost:9443/oauth2/introspect`} />
              </div>
              <div className="dash__flow-card">
                <h4 className="dash__flow-title">Auth Flow: OIDC Authorization Code + PKCE</h4>
                <div className="dash__flow-steps">
                  {["1. App generates code_verifier + code_challenge (PKCE)","2. Redirect to WSO2 IS /oauth2/authorize","3. User logs in on WSO2 IS login page","4. WSO2 IS returns authorization code to redirect URL","5. App exchanges code for tokens via /oauth2/token","6. SDK validates ID Token signature (JWKS)","7. Session established — user is authenticated"].map((step, i) => (
                    <div key={i} className="dash__flow-step">
                      <div className="dash__flow-dot" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Raw Claims Tab */}
          {activeTab === "raw" && (
            <div>
              <div className="dash__section-header">
                <h3 className="dash__section-title">Raw Token Claims (JSON)</h3>
                <p className="dash__section-desc">Complete decoded claims from your WSO2 IS 7.3 session</p>
              </div>
              <pre className="dash__raw-json">
                {JSON.stringify({ userInfo, decodedToken, authState: { isAuthenticated: authState.isAuthenticated, username: authState.username } }, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ClaimRow({ label, value, icon, mono }) {
  return (
    <div className="claim-row">
      <div className="claim-row__label">
        <span className="claim-row__icon">{icon}</span>
        {label}
      </div>
      <div className={`claim-row__value ${mono ? "claim-row__value--mono" : ""}`}>
        {value || "—"}
      </div>
    </div>
  );
}

function EndpointRow({ label, url }) {
  return (
    <div className="endpoint-row">
      <div className="endpoint-row__label">{label}</div>
      <div className="endpoint-row__url">{url}</div>
    </div>
  );
}

export default DashboardPage;
