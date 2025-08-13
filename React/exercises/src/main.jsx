import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppStates from './AppStates.jsx'
import AppInput from "./AppInput.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <AppInput />
  </StrictMode>
);
