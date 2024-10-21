import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Ecom } from '../context/Api'

function Cart() {
    const {cart, setCart} = useContext(Ecom)
  return (
    <div>
     <BsCart4 size={40} />



     {
        cart.map((item)=> {
            const {id, title, image, } = item
            return (
                <div key {id} className="d-flex justify-content-between align-items-center" style={{ width: '600px', border: '2px solid black', margin: '10px' }}>

                    <h3>
                         {title}
                    </h3>
  <img src={image} alt=""  style={{width:'50%',height:'6rem'}}/>
  <button onClick={() => removeItem(id)}>Remove</button>
                </div>
            )
        })
     }


    </div>
  )
}

export default Cart
