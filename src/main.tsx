import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"

import { router } from "@/router"
import "@/index.css"

document.documentElement.classList.add("dark")

const root = document.getElementById("root")

if (root) {
  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
