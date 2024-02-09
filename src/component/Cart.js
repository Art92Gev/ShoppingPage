import React, { useContext, useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { Context } from './Context';
import './Paymant.css';
import Paymant from './Paymant';

export default function Cart() {
    const elem = useContext(Context);
    const [count, setCount] = useState(1);
    const [money, setMoney] = useState(0);

    return (
        <div className='cart' ref={elem.cart} style={{ clipPath: elem.show ? 'circle(70.7% at 50% 50%)' : "circle(0.0% at 0 100%)" }}>
            {
                elem.shopList.map((shop, index) => {
                    return (
                        <div className='prod' key={shop.id}>
                            <img src={shop.pictrue} alt="" />
                            <h2>{shop.name}</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, alias?
                            </p>
                            <div className="countButtons">
                                <button onClick={() => {
                                    if (shop.quanity < 2) {
                                        return false
                                    }
                                    else {
                                        setCount(count + shop.quanity);
                                        setCount(shop.quanity -= 1);
                                        setMoney(shop.price -= shop.isQuan);
                                        elem.setTotal(elem.total -= shop.isQuan);
                                    }
                                }}>-</button>
                                <span>{shop.quanity}</span>
                                <button onClick={() => {
                                    setCount(shop.quanity += 1)
                                    setMoney(shop.price += shop.isQuan)
                                    elem.setTotal(elem.total += shop.isQuan);
                                }}>+</button>
                            </div>
                            <h2>{shop.price}$</h2>
                            <button onClick={() => {
                                elem.removeElement(shop.id);
                                elem.setTotal(elem.total - shop.price);
                                shop.quanity = 1;
                                shop.price = shop.isQuan;
                                if (elem.shopList.length < 2) {
                                    elem.setShow(false);
                                }
                            }}>
                                <AiFillDelete />
                            </button>
                        </div>
                    )
                })
            }
            <div className="forTotal">Total : {elem.total}$</div>
            <div className="forTotal" onClick={() => {
                elem.setShowPay(!elem.showPay)
            }}>Pay With Card:</div>
            <div className="validCard" style={{clipPath : elem.showPay ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' : ' polygon(0 0, 0 0, 0 100%, 0% 100%)'}}>
                <Paymant />
            </div>
        </div>
    );
}