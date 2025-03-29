import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({});

	const putUserData = (userInfo) => {
		//guardar as informações do usuario no localStorage ao logar na aplicação
		setUserInfo(userInfo);

		localStorage.setItem('devburger:userDate', JSON.stringify(userInfo));
	};

	const logout = () => {
		setUserInfo({});
		localStorage.removeItem('devburger:userDate');
	};

	useEffect(() => {
		const userInfoLocalStorage = localStorage.getItem('devburger:userDate');
		if (userInfo) {
			setUserInfo(JSON.parse(userInfoLocalStorage));
		}
	}, []);

	return (
		<>
			<UserContext.Provider value={{ userInfo, putUserData, logout }}>{children}</UserContext.Provider>
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
