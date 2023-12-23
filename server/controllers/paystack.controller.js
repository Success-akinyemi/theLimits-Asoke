import axios from 'axios'
import OrderModel from '../model/Order';

export async function checkoutPayment(req, res){
    try {
        const fullAmount = req.body.total * 100
        const email = req.body.email
    
        const response = await axios.post(
          `${process.env.PAYSTACK_INITIALIZE_URL}`,
          {
            email,
            amount: fullAmount,
            callback_url: `${process.env.CALLBACK_URL}`
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.PAYSTACK_TEST_SK}`,
              'Content-Type': 'application/json'
            }
          }
        );
    
        const { authorization_url, reference } = response.data.data;
        console.log('refrence',reference)

        const fullOrder = {...req.body, transactionRef: reference}

        const userOrder = new OrderModel(fullOrder)
        await userOrder.save() 

        console.log('NEW ORDER:', userOrder)
        
        res.send({ authorizationUrl: authorization_url });
    } catch (error) {
        console.log('UNABLE TO MAKE SHECKOUT PAYMENT', error)
        res.status(500).json({ success: false, data: 'Unable to create checkout payment'})
    }
}

export async function vertifyPayment(){
    
}
