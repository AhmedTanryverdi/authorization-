import "./logo.scss";
import React from "react";
import logo from "@/shared/assets/icons/symbol.png";

export const Logo: React.FC = (): React.JSX.Element => {
	return (
		<div className="logo">
			<img src={logo} alt="logo" className="logo__icon" />
			<h2 className="logo__text">Company</h2>
		</div>
	);
};
