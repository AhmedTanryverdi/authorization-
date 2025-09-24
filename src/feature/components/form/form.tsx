import "./form.scss";
import { Button } from "@/shared/components/button/button";
import { Body } from "./ui/body/body";
import { Header } from "./ui/header/header";
import React from "react";

export const Form: React.FC = (): React.JSX.Element => {
	return (
		<form className="form">
			<Header />
			<Body />
			<Button label="Log in" />
		</form>
	);
};
