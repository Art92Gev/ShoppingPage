import { useRef, useState } from 'react';
import './App.css';
import { Context } from './component/Context';
import Product from './component/Porduct';
import Cart from './component/Cart';
import Slider from './component/Slider';


function App() {
	const [show, setShow] = useState(false);
	const [shopList, setShopList] = useState([]);
	const [total, setTotal] = useState(0);
	const products = useRef();
	const cart = useRef();
	const [showPay, setShowPay] = useState(false);

	const addElement = (element) => {
		setShopList([...shopList, element])
	}

	const removeElement = (id) => {
		setShopList([...shopList.filter(item => item.id !== id)]);
	}

	let element = {
		show, setShow,
		shopList, setShopList,
		addElement,
		total, setTotal,
		removeElement,
		products,
		showPay, setShowPay,
		cart
	}

	return (

		<Context.Provider value={element}>
			<div className="App">
				<Slider />
				<Product />
				<Cart />
			</div>
		</Context.Provider>
	);
}

export default App;