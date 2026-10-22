# OCBC Indonesia — WSO2 IS 7.3 SSO Demo

> A premium React SPA demonstrating Single Sign-On (SSO) integration with **WSO2 Identity Server 7.3** using the OIDC Authorization Code + PKCE flow.

---

## 🚀 Quick Start

### Step 1 — Start WSO2 Identity Server 7.3

```bash
cd wso2is-7.3.0
sh bin/wso2server.sh
```

Wait until you see: `WSO2 Identity Server started in X sec`

Open the admin console: **https://localhost:9443/console**
- Username: `admin`
- Password: `admin`

---

### Step 2 — Register the React App in WSO2 IS 7.3

1. Go to **Applications** → **New Application**
2. Select **Single Page Application**
3. Fill in:
   - **Name:** `OCBC-Indonesia-SSO-Demo`
   - **Authorized Redirect URLs:** `http://localhost:5173`
   - **Allowed Origins:** `http://localhost:5173`
4. Click **Register**
5. Copy the **Client ID** shown in the Protocol/Info tab

---

### Step 3 — Configure the Demo App

Open `src/authConfig.js` and update:

```js
const authConfig = {
  clientID: "PASTE_YOUR_CLIENT_ID_HERE",   // ← Replace this
  baseUrl: "https://localhost:9443",        // ← WSO2 IS URL
  signInRedirectURL: "http://localhost:5173",
  signOutRedirectURL: "http://localhost:5173",
  scope: ["openid", "profile", "email"],
  storage: "sessionStorage",
};
```

---

### Step 4 — Run the Demo App

```bash
cd "ocbc-sso-demo"
npm install
npm run dev
```

Open: **http://localhost:5173**

---

## 📋 Features

| Feature | Details |
|---------|---------|
| Authentication Flow | OIDC Authorization Code + PKCE |
| SDK | `@asgardeo/auth-react` |
| Identity Provider | WSO2 Identity Server 7.3 |
| Token Storage | Session Storage (configurable) |
| User Profile Display | Name, email, username, sub |
| ID Token Viewer | Decoded JWT claims |
| OIDC Endpoints Reference | All WSO2 IS 7.3 endpoints |
| Raw Claims Inspector | Full JSON dump |

---

## 🔗 WSO2 IS 7.3 OIDC Endpoints

| Endpoint | URL |
|----------|-----|
| Well-Known Config | `https://localhost:9443/oauth2/token/.well-known/openid-configuration` |
| Authorization | `https://localhost:9443/oauth2/authorize` |
| Token | `https://localhost:9443/oauth2/token` |
| UserInfo | `https://localhost:9443/oauth2/userinfo` |
| JWKS | `https://localhost:9443/oauth2/jwks` |
| Logout | `https://localhost:9443/oidc/logout` |
| Revoke | `https://localhost:9443/oauth2/revoke` |

---

## 🛠️ Tech Stack

- **React 19** + **Vite** — SPA framework
- **@asgardeo/auth-react** — Official WSO2/Asgardeo React SDK
- **Vanilla CSS** — Premium glassmorphism design
- **WSO2 IS 7.3** — OIDC Identity Provider

---

## ⚠️ Self-Signed Certificate Note

WSO2 IS 7.3 uses a self-signed SSL certificate by default. To avoid browser SSL errors:

1. Open **https://localhost:9443** in your browser first
2. Click "Advanced" → "Proceed to localhost (unsafe)"
3. Then navigate back to your React app at http://localhost:5173

---

## 📚 References

- [WSO2 IS 7.3 Docs](https://is.docs.wso2.com/en/7.3.0/)
- [Asgardeo React SDK](https://github.com/asgardeo/asgardeo-auth-react-sdk)
