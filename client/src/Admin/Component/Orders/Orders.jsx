import { Link } from 'react-router-dom'
import './Orders.css'

function Orders({ data }) {
  return (
    <table className='orderstable'>
        <thead>
            <tr>
                <th>Customer Name</th>
                <th>Order ID</th>
                <th>Payment</th>
                <th>Shipping Status</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item) => (
                    <tr>
                        <td>{item?.firstname} {item?.lastname}</td>
                        <td>{item?._id}</td>
                        <td>{item?.payment ? <span className='success'>Paid</span> : <span className='danger'>Unpaid</span> }</td>
                        <td>{item?.status === 'Pending' ? <span className='warning'>{item.status}</span> : <span className='success'>{item.status}</span> }</td>
                        <td><Link to={`/order/${item?._id}`} className='link'>Details</Link></td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default Orders