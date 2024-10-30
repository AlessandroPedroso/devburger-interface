import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import Login from '../pages/Login';
import { Menu } from '../pages/Menu';
import Register from '../pages/Register';

export const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/cadastro',
		element: <Register />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/cardapio',
		element: <Menu />,
	},
]);
