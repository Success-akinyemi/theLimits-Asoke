import './MobileNav.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import RestoreIcon from '@mui/icons-material/Restore';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';


function MobileNav() {
    const quantity = useSelector(state => state.cart.quantity)
    
  return (
    <div className='mobileNav'>
        <Link className='link moblieNavLink' to='/'>
            <HomeIcon />
            <p>Home</p>
        </Link>
        <Link className='link moblieNavLink' to='/mycart'>
            <Badge badgeContent={quantity} max={99} color='secondary'>
                <ShoppingCartIcon />
            </Badge>
            <p>My cart</p>
        </Link>
        <Link className='link moblieNavLink'>
            <RestoreIcon />
            <p>My Orders</p>
        </Link>
        <Link className='link moblieNavLink' to='/profile'>
            <AccountCircleIcon />
            <p>Me</p>
        </Link>
    </div>
  )
}

export default MobileNav