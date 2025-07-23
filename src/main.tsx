import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.css"
import App from "./App"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <App />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  </StrictMode>
)
