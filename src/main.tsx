import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const element = document.getElementById("root");
if (!element) throw new Error("Missing application root");
createRoot(element).render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>);
