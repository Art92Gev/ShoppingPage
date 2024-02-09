import { list } from "./list";
import { FaShoppingBag } from "react-icons/fa";
import { AiFillShopping } from 'react-icons/ai';
import { CgColorPicker } from 'react-icons/cg';
import { useContext, useRef, useState } from "react";
import { Context } from "./Context";



export default function Product() {
	const elem = useContext(Context);
	const [col, setCol] = useState('');
	const showName = useRef();

	return (
		<div className="prdoucts" ref={elem.products}>
			<header>
				<span ref={showName} className="addName"></span>
				<aside>
					<button onClick={() => {
						elem.setShow(!elem.show);
						if (elem.shopList.length > 4) {
							elem.products.current.style.position = 'fixed';
							elem.cart.current.style.position = 'relative';
						}
						else {
							elem.products.current.style.position = 'relative';
							elem.cart.current.style.position = 'fixed';
						}
					}}>
						<AiFillShopping />
						<span className="count">{elem.shopList.length}</span>
					</button>
					<button>
						<CgColorPicker />
					</button>
					<input type="color" onChange={(event) => {
						setCol(event.target.value);
					}} />
				</aside>
			</header>
			<div className="product" style={{ background: col }}>
				<section>
					{list.map((item, index) => {
						return (
							<div className="items" key={item.id}>
								<div className="overley"></div>
								<div className="productBox">
									<img src={item.pictrue} alt="" />
									<h2>{item.name}</h2>
									<div className="hovers"></div>
									<h2 className="h2">{item.price}$</h2>
									<p>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis reiciendis commodi ab culpa quia, laborum dolore illo.
									</p>
									<button onClick={() => {
										showName.current.innerText = 'Added' + item.name;
										showName.current.style.opacity = '1';
										setTimeout(() => {
											showName.current.style.opacity = '0';
										},2000);
										if (elem.shopList.includes(item)) {
											return false
										}
										else {
											elem.addElement(item);
											elem.setTotal(elem.total + item.isQuan);
										}
									}} className="button">
										<FaShoppingBag />
									</button>
								</div>
							</div>
						)
					})}
				</section>
			</div>
		</div>
	)
}