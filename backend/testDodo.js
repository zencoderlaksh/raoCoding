import DodoPayments from 'dodopayments';
import dotenv from 'dotenv';

dotenv.config();

const dodoClient = new DodoPayments({ 
    bearerToken: process.env.DODO_PAYMENTS_API_KEY, 
    environment: 'test_mode' 
}); 

const product = await dodoClient.products.create({
    name: 'Test Course',
    description: 'A test course',
    tax_category: 'digital_products',
    price: {
        currency: 'USD',
        discount: 0,
        price: 1000,
        purchasing_power_parity: false,
        type: 'one_time_price'
    },
});
console.log('Product created:', product.product_id);

dodoClient.payments.create({ 
    customer: { 
        email: 'test@example.com', 
        name: 'Test User'
    },
    billing: {
        city: "New York",
        country: "US",
        state: "NY",
        street: "123 Main St",
        zipcode: "10001"
    }, 
    product_cart: [
        {
            product_id: product.product_id,
            quantity: 1
        }
    ],
    return_url: 'http://localhost:5173/profile?payment=success', 
    metadata: { userId: '123', courseId: '456' } 
}).then(res => console.log('Success:', res.payment_id))
  .catch(err => {
      console.log('Error Name:', err.name);
      console.log('Error Msg:', err.message);
      if (err.error) console.log('API Error:', err.error);
  });
