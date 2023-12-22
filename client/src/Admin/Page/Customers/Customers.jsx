import AdminSidebar from '../../Component/AdminSidebar/AdminSidebar'
import './Customers.css'
import '../../adminStyling.css'
import AdminAside from '../../Component/AdminAside/AdminAside'

function Customers() {
  return (
    <div className='admin'>
        <div className="adminSidebar">
          <AdminSidebar />
        </div>

        <div className="adminContainer"></div>

        <div className="adminAside">
            <AdminAside />
        </div>

    </div>
  )
}

export default Customers