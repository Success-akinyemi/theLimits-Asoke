import Footer from '../../Component/Footer/Footer'
import MobileNav from '../../Component/MobileNav/MobileNav'
import Navbar from '../../Component/Navbar/Navbar'
import './Orders.css'

function Orders() {
  return (
    <div className='bg orders'>
        <Navbar />
        <MobileNav />
        <div className="content">
            <h1>Your Orders</h1>
        </div>
        <Footer />
    </div>
  )
}

export default Orders