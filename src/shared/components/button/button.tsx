import "./button.scss";
import React from "react";

export const Button: React.FC<{ label: string }> = ({
	label,
}): React.JSX.Element => {
	return (
		<div className="button-block">
			<button type="submit" className="button-block__btn">
				{label}
			</button>
		</div>
	);
};
