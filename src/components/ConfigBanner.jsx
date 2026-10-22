import "./ConfigBanner.css";
import authConfig from "../authConfig.js";

const isConfigured = Boolean(authConfig.clientID && authConfig.clientID !== "YOUR_CLIENT_ID_FROM_WSO2_IS");

function ConfigBanner() {
  if (isConfigured) return null;

  return (
    <div className="config-banner" id="config-banner">
      <div className="config-banner__icon">⚙️</div>
      <div className="config-banner__text">
        <strong>Setup Required:</strong> Open{" "}
        <code>src/authConfig.js</code> and configure your Client ID from WSO2 IS 7.3 Console at{" "}
        <a
          href="https://localhost:9443/console"
          target="_blank"
          rel="noreferrer"
          className="config-banner__link"
        >
          https://localhost:9443/console
        </a>
      </div>
    </div>
  );
}

export default ConfigBanner;
