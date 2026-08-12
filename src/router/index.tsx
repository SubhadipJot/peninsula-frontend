import { createBrowserRouter } from "react-router-dom"

import { RootLayout } from "@/layouts/root-layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { HomePage } = await import("@/pages/home/home-page")
          return { Component: HomePage }
        },
      },
      {
        path: "jobs",
        lazy: async () => {
          const { JobsPage } = await import("@/pages/jobs/jobs-page")
          return { Component: JobsPage }
        },
      },
      {
        path: "applications",
        lazy: async () => {
          const { ApplicationsPage } = await import("@/pages/applications/applications-page")
          return { Component: ApplicationsPage }
        },
      },
      {
        path: "*",
        lazy: async () => {
          const { NotFoundPage } = await import("@/pages/not-found/not-found-page")
          return { Component: NotFoundPage }
        },
      },
    ],
  },
])
