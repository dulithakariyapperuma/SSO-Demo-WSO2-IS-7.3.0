/**
 * WSO2 Identity Server 7.3 - Authentication Configuration
 *
 * Based on official WSO2 IS 7.3 documentation:
 * Endpoints reference: https://localhost:9443/oauth2/token/.well-known/openid-configuration
 *
 * SETUP STEPS:
 * 1. Start WSO2 IS 7.3:
 *    cd wso2is-7.3.0 && sh bin/wso2server.sh
 *
 * 2. Open WSO2 Console: https://localhost:9443/console
 *    Login: admin / admin
 *
 * 3. Go to: Applications → New Application → Single Page Application
 *    Name: OCBC-ID-Mobile-Demo
 *    Authorized Redirect URL: http://localhost:5173
 *    Allowed Origins: http://localhost:5173
 *    Click Register
 *
 * 4. Copy Client ID from the Protocol/Info tab and paste below
 */

const authConfig = {
  // ───  Client ID from WSO2 IS Console ───
  clientID: "GHcb9xQJmiK64BIorJ52ViIyr38a",

  // ─── WSO2 IS 7.3 base URL (default port 9443) ───
  baseUrl: "https://localhost:9443",

  // ─── Must match what you registered in WSO2 IS Console ───
  signInRedirectURL: "https://ocbc-bank-demo-app.vercel.app/",
  signOutRedirectURL: "https://ocbc-bank-demo-app.vercel.app/",

  // ─── OIDC Scopes requested ───
  scope: ["openid", "profile", "email"],

  // ─── Token storage strategy ───
  // "sessionStorage" = cleared on tab close (recommended for banking)
  // "localStorage"   = persistent across sessions
  // "webWorker"      = most secure, tokens never exposed to JS
  storage: "sessionStorage",

  // ─── WSO2 IS 7.3 Core OIDC Endpoints (for reference) ───
  // Authorization:  https://localhost:9443/oauth2/authorize
  // Token:          https://localhost:9443/oauth2/token
  // UserInfo:       https://localhost:9443/oauth2/userinfo
  // JWKS:           https://localhost:9443/oauth2/jwks
  // Revoke:         https://localhost:9443/oauth2/revoke
  // Logout:         https://localhost:9443/oidc/logout
};

export default authConfig;
