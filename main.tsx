"use strict";

import "./main.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DisableProvider } from "./src/shared/";
import { App } from "./src/app/ui/app";

const root = document.querySelector(".root");

if (root) {
	createRoot(root).render(
		<StrictMode>
			<DisableProvider>
				<App />
			</DisableProvider>
		</StrictMode>
	);
}
