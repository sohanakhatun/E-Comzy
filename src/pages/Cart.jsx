import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);

useEffect(()=>{
  setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
},[cart])

  return (
    <div className="cart">
    {
      cart.length > 0 ?
      (<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">

        <div className="w-full md:w-[60%] flex flex-col p-2">
          {
            cart.map( (item,index) => {
              return <CartItem key={item.id} item={item} itemIndex={index}  className="border-b-2"/>
            })
          }
        </div>

        <div className="w-full md:w-[40%] mt-5 flex flex-col">
          <div className="flex flex-col p-5 gap-5 my-14 h-full justify-between">
            <div className="flex flex-col gap-5">
              <div className="font-semibold text-xl text-green-800 uppercase">Your Cart</div>
              <div className="font-semibold text-5xl text-green-700 -mt-5 uppercase">Summary</div>
              <p className="text-xl font-bold">
                <span className="cart-text text-gray-700 font-semibold text-xl">Total Items : </span>
                {cart.length}
              </p>
            </div>  

            {/* bb-2 boderslate500 */}

            <div className="flex flex-col">
              <p className="text-xl font-bold">
                <span className="cart-text text-gray-700 font-semibold">Total Amount : </span>
               <p className="text-green-700">${totalAmount}</p>  
              </p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition-all ease-linear duration-300 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl mt-5">
                Checkout Now
              </button>
            </div>
          </div>

        </div>

      </div>) : 
      (<div className="flex flex-col justify-center items-center min-h-[80vh]">
        <h1 className=" cart-text text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
        <p className="cart-text text-gray-600 tracking-wide mt-2">Explore new stock and shop now</p>
        <Link to={"/"}>
          <button className="cart-text bg-green-600 hover:bg-purple-50 rounded-lg text-white transition-all ease-linear duration-300 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 mt-5 uppercase tracking-wider">
            Shop Now
          </button>
        </Link>
      </div>)
    }
  </div>
  );
};

export default Cart;
