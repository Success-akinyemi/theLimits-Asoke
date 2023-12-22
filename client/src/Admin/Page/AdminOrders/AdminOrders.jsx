import './AdminOrders.css'
import '../../adminStyling.css'
import AdminSidebar from '../../Component/AdminSidebar/AdminSidebar'
import AdminAside from '../../Component/AdminAside/AdminAside'
import Spinner from '../../Component/Spinner/Spinner'


function AdminOrders() {
  return (
    <div className='admin'>
        <div className="adminSidebar">
          <AdminSidebar />
        </div>

        <div className="adminContainer">
          <Spinner />
        </div>

        <div className="adminAside">
          <AdminAside />
        </div>

    </div>
  )
}

export default AdminOrders