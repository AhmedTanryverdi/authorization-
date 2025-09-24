import "./app.scss";
import React from "react";
import { Form } from "./components";

export const App: React.FC = (): React.JSX.Element => {
	return (
		<div className="app">
			<Form />
		</div>
	);
};
