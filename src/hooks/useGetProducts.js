import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(async () => {
		const { data } = await axios(`${process.env.API}/products`);
		setProducts(data);
	}, []);

	return products;
};

export default useGetProducts;