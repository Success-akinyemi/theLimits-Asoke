import { Link } from 'react-router-dom'
import Footer from '../../Component/Footer/Footer'
import MobileNav from '../../Component/MobileNav/MobileNav'
import Navbar from '../../Component/Navbar/Navbar'
import './Cart.css'
import { cartProduct } from '../../data.js/cartProduct'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useSelector } from 'react-redux'

function Cart() {
    const cart = useSelector(state => state.cart)
    console.log('CART',cart)

  return (
    <div className='bg cart'>
        <Navbar />
        <MobileNav />
        <div className="content">
            <h1>Your Cart</h1>
            <div className="top">
                <div className="left">
                    <Link to='/store' className='link btn'>Continue Shopping</Link>
                </div>

                <div className="middle">
                    <span>Shopping Item({cart.products?.length})</span>
                </div>

                <div className="right">
                    <button className='btn'>Checkout now</button>
                </div>
            </div>

            <div className="body">
                <div className="left">
                    {
                        cart.products?.map((item, idx) => (
                            <div key={idx} className="card">
                                <div className="img">
                                    <img src={item?.img} alt={`${item?.name}`} />
                                </div>
                                <div className="info">
                                    <span>Product: <p>{item?.name}</p></span>
                                    <span>ID: <p>{item?._id}</p></span>
                                    <span>Color: 
                                        {
                                            item?.color.map((item, idx) => (
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'}}>
                                                    <span style={{background: `${item}`, width: '25px', height: '25px', borderRadius: '50%'}} key={idx} className='colorCircle'>

                                                    </span>
                                                    <small style={{cursor: 'pointer'}}>{item}</small>    
                                                </div>
                                            ))
                                        }
                                    </span>
                                    {item.size.length > 0 ? 
                                        (
                                            <span>Size: 
                                                {
                                                    item?.size.map((item, idx) => (
                                                        <>
                                                            <span key={idx} className='colorCircle'>{item},</span>
                                                        </>
                                                    ))
                                                }

                                            </span>
                                        ) : ('')
                                    }
                                </div>
                                <div className="price">
                                    <div className="quantity">
                                        <p className='title'>Quantity:</p>
                                        <div className='q-card'>
                                            <button className='qbtn'><RemoveIcon className='icon' /></button>
                                            <span className="number">{item?.quantity}</span>
                                            <button className='qbtn'><AddIcon className='icon' /></button>
                                        </div>
                                    </div>
                                    <span className="amount">
                                        NGN {item?.price * item?.quantity}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="right">
                    <h1>ORDER SUMMARY</h1>

                    <div className="total">
                        <span>SubTotal: <p>NGN {cart.total.toLocaleString()}</p></span>
                        <span>Shipping fee: <p>NGN 0</p></span>
                        <span>Transaction fee: <p>NGN 0</p></span>
                        <span>Discount: <p>NGN 0</p></span>

                    </div>

                    <div className="totalfee">
                        <span>Total: <p>NGN {cart.total.toLocaleString()}</p></span>
                    </div>

                    <button className='checkoutBtn'>Checkout now</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart