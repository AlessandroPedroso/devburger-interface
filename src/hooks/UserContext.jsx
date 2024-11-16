import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});
const UserContextTeste = createContext({});

export const UserProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({ id: 1, name: 'Alessandro Schuquel Pedroso' });
	const [teste, SetTeste] = useState('teste');

	return (
		<>
			<UserContext.Provider value={{ userInfo }}>{children}</UserContext.Provider>
			<UserContextTeste.Provider value={{ teste }}>{children}</UserContextTeste.Provider>
		</>
	);
};

export const userUser = () => {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('userUser must be a valid context');
	}

	return context;
};

export const userTeste = () => {
	const context = useContext(UserContextTeste);

	if (!context) {
		throw new Error('userUser must be a valid context');
	}

	return context;
};
