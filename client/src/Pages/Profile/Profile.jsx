import { useSelector } from 'react-redux'
import './Profile.css'
import { useState } from 'react'
import AccountProfile from '../../Component/AccountProfile/AccountProfile'
import UserTransactions from '../../Component/UserTransactions/UserTransactions'

function Profile() {
  const { currentUser } = useSelector(state => state.user)
  const user = currentUser?.data
  const [ menuOption, setMenuOption ] = useState('accountProfile')

  const RenderMenuOption = () => {
    switch(menuOption){
      case 'accountProfile':
        return <AccountProfile />;
      case 'transactions':
        return <UserTransactions />;

      default:
        return ''
    }
  }

  return (
    <div className='profile'>
      <div className="sidebar">
          <div className="top">
              <img className='profileImg' src={user.profilePicture} alt={`profile image of ${user.username}`} />
              <h2 className='username'>{user.username}</h2>
          </div>

          <div className="menu">
            <span onClick={() => setMenuOption('accountProfile')} className={`links ${ menuOption === 'accountProfile' ? 'activeLink' : ''}`} >My Account</span>
            <span onClick={() => setMenuOption('transactions')} className={`links ${ menuOption === 'transactions' ? 'activeLink' : ''}`} >My Transactions</span>
            <span onClick={() => setMenuOption('')} className={`links ${ menuOption === '' ? 'activeLink' : ''}`} ></span>
            <span onClick={() => setMenuOption('')} className={`links ${ menuOption === '' ? 'activeLink' : ''}`} ></span>
          </div>

          <div className="logout">
            Logout
          </div>
      </div>

      <div className="content">
        {RenderMenuOption()}
      </div>
    </div>
  )
}

export default Profile