import { useEffect, useState } from 'react';
import { getCategories } from '../../utils/dataAPi';

function CategoriesCarousel() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function loadCatefories() {
			const response = await getCategories();
			console.log(response);
		}

		loadCatefories();
	}, []);

	return (
		<div>
			<h1>Ok</h1>
		</div>
	);
}

export default CategoriesCarousel;
