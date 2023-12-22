import AdminSidebar from '../../Component/AdminSidebar/AdminSidebar'
import './AdminProducts.css'
import '../../adminStyling.css'
import AdminAside from '../../Component/AdminAside/AdminAside'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from 'react-router-dom';
import { useFetchProduct } from '../../../Helpers/fetch.hooks';
import Spinner from '../../Component/Spinner/Spinner';
import { useState } from 'react';

function AdminProducts() {
  const { isLoadingProduct, productData  } = useFetchProduct();
  const data = productData?.data
  const [selectedSortOption, setSelectedSortOption] = useState('');
  console.log('PP', data)

  const handleSortChange = (e) => {
    setSelectedSortOption(e.target.value);
  };

  // filter data
  const filteredData = data?.filter((item) => {
    if (selectedSortOption === 'discountProduct') {
      return item?.isDiscountAllowed === true;
    } else if (selectedSortOption === 'outOfStock') {
      return item.quantity <= 0;
    }
    return true;
  });

  return (
    <div className='admin'>
        <div className="adminSidebar">
          <AdminSidebar />
        </div>

        <div className="adminContainer">
          <div className="adminProducts">
            <h1 className="h-1">All Products</h1>
            
            <div className="sort">
              <div className="sortBox">
                <label>Sort By:</label>
                <select value={selectedSortOption} onChange={handleSortChange}>
                  <option value="">-- NONE --</option>
                  <option value="discountProduct"> DISCOUNTED PRODUCT </option>
                  <option value="outOfStock"> OUT OF STOCK PRODUCT </option>
                </select>
              </div>
            </div>

            <div className="productsContainer">
              {
                isLoadingProduct ? (
                  <Spinner />
                ) : (
                    filteredData?.map((item) => (
                      <div className="productCard">
                        <img src={item?.img} alt={`${item?.name}`} className='productImg'/>
                        <div className="info">
                          <div className="top">
                            <h3 className="h-3">{item?.name}</h3>
                            <h4 className="h-4">NGN {item.price.toLocaleString()}</h4>
                          </div>
                          <div className="bottom">
                              <span><DeleteOutlinedIcon className='pIcon' /></span>
                              <span><Link to={`/admin-Product/${item?._id}`}><EditOutlinedIcon className='pIconTwo' /></Link></span>
                          </div>
                          <div className={`foot ${item?.quantity > 0 ? 'one' : 'two'}`}>
                              {item?.quantity > 0 ? 'Availble in Stock' : 'Out of Stock'}
                          </div>
                        </div>
                      </div>
                    ))
                )
              }
            </div>
          </div>
        </div>

        <div className="adminAside">
          <AdminAside />
        </div>

    </div>
  )
}

export default AdminProducts