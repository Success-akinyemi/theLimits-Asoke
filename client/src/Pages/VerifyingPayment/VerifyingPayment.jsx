import { useEffect } from 'react'
import './VerifyingPayment.css'
import { verifyPayment } from '../../Helpers/api'
import Spinner from '../../Admin/Component/Spinner/Spinner'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function VerifyingPayment() {
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const queryParams = new URLSearchParams(window.location.search)
            const reference = queryParams.get('reference')
            
            if(reference){
                try {
                    const res = await verifyPayment({reference})
                    if(res?.data.success){
                        toast.success(res?.data.data)
                        navigate('/myorder')
                    } else if(!res?.data.success){
                        toast.error(res?.data.data)
                        navigate('/mycart')
                    }
                } catch (error) {
                    console.log(error)
                }
            } else{
                console.log('PARAMS', queryParams)
            }
        }
        fetchData()
    }, [])

  return (
    <div className='bg verifyPayment'>
        <div className="content">
            <Spinner />
            <p>Please Wait...</p>
        </div>
    </div>
  )
}

export default VerifyingPayment
