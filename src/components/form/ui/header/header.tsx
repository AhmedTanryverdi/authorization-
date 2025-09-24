import "./header.scss";
import React from "react";
import { Logo } from "@/shared";

export const Header: React.FC = (): React.JSX.Element => {
	return (
		<div className="header">
			<Logo />
			<div className="header__subtitle">
				<h3 className="header__subtitle_text">
					Sign in to your account to continue
				</h3>
			</div>
		</div>
	);
};
