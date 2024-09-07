import { api } from '../services/api';

export async function createRegister(data) {
	const { status } = await api.post(
		'users',
		{
			name: data.name,
			email: data.email,
			password: data.password,
		},
		{
			validateStatus: () => true,
		},
	);

	return status;
}
