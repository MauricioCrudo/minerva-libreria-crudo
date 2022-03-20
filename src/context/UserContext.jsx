import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	// user state
	const [user, setUser] = useState("");
	const [admin, setAdmin] = useState(false);
	// set user
	const signIn = (input) => {
		setUser(input);
		if (input === "admin") {
			setAdmin(true);
		}
	};

	return (
		<UserContext.Provider value={{ admin, user, signIn, setAdmin }}>
			{children}
		</UserContext.Provider>
	);
};
export default UserContextProvider;
