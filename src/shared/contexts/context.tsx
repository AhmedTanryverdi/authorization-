import { createContext, ReactNode, useState } from "react";
import { InputValueType } from "../utils/types";

export const StateContext = createContext<InputValueType | undefined>(
	undefined
);

export const DisableProvider = ({ children }: { children: ReactNode }) => {
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");

	return (
		<StateContext.Provider
			value={{
				emailValue,
				passwordValue,
				setEmailValue,
				setPasswordValue,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};
