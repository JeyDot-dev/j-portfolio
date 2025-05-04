import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContentProvider } from "./components/context/contentProvider";
import { VisibilityProvider } from "./components/context/VisibilityProvider";
import { Provider } from "./components/context/chakraProvider";

const anchorLinks = {
  home: "landing-section",
  aboutMe: "aboutme-section",
  projects: "projects-section",
  contactMe: "contactme-section",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <VisibilityProvider anchorLinks={anchorLinks}>
        <ContentProvider>
          <App anchorLinks={anchorLinks} />
        </ContentProvider>
      </VisibilityProvider>
    </Provider>
  </StrictMode>,
);
