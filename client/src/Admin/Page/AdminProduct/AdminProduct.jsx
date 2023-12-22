import './AdminProduct.css'
import '../../adminStyling.css'
import AdminSidebar from '../../Component/AdminSidebar/AdminSidebar'
import AdminAside from '../../Component/AdminAside/AdminAside'

function AdminProduct() {
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

export default AdminProduct