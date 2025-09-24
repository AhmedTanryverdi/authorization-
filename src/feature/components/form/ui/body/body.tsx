import "./body.scss";
import { StateContext } from "@/shared/contexts/context";
import { InputValueType } from "@/shared/utils/types";
import React, { useContext } from "react";
import { InputField } from "./ui/input_field";

export const Body: React.FC = (): React.JSX.Element => {
	const context = useContext<InputValueType | undefined>(StateContext);

	if (!context) throw new Error("context Error!");

	const { emailValue, passwordValue, setEmailValue, setPasswordValue } =
		context;

	return (
		<div className="body">
			<InputField
				htmlFor="email"
				inputValue={emailValue}
				setInputValue={setEmailValue}
			/>
			<InputField
				htmlFor="password"
				inputValue={passwordValue}
				setInputValue={setPasswordValue}
			/>
		</div>
	);
};
