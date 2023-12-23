import axios from 'axios'
import toast from 'react-hot-toast'

export async function addCategory(formData){
    try {
        console.log(formData)
        const res = await axios.post('/api/admin/newCategory', formData)
        return res
    } catch (error) {
        toast.error('Failed to upload Category')
        console.log(error)
    }
}

export async function addProduct(formData){
    try {
        console.log(formData)
        const res = await axios.post('/api/product/createProduct', formData)
        return res
    } catch (error) {
        toast.error('Failed to upload Category')
        console.log(error)
    }
}

export async function checkoutPayment(formData){
    try {
        const res = await axios.post('/api/paystack/checkoutPayment', formData)
        const authorizationUrl = res.data.authorizationUrl;
        console.log('url', authorizationUrl)
        window.location.href = authorizationUrl
    } catch (error) {
        toast.error('Failed to upload Category')
        console.log(error)
    }
}