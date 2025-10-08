import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./components/Home/Home.jsx";
import Install from "./components/Install/Install.jsx";
import Apps from "./components/Apps/Apps.jsx";
import Root from "./Root.jsx";
import AppDetails from "./components/App Details/AppDetails.jsx";
import PageError from "./components/Page Error/PageError.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
    errorElement: <PageError></PageError>,
    hydrateFallbackElement: <h1>Loading...</h1>,
		children: [
			{
				index: true,
				Component: Home,
			},
			{ 
        path: "apps",
        Component: Apps,
      },
      {
        path: "app/:id",
        Component: AppDetails,
      },
			{ path: "install", Component: Install },
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
