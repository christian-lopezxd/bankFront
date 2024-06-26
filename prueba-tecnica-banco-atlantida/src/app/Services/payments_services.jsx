import axios from "axios";
const url = 'http://localhost:5080';
import { toast } from 'react-toastify';
const PaymentsServices = {};

PaymentsServices.Create = async (id, date, amount) => {
    try{
        const response = await axios.post(`${url}/api/Transactions/Create`, {
            creditCardId: id,
            date: date,
            description: "Pago de tarjeta de crédito",
            amount: amount,
            type: 1
          }) 
          
          if (response.status === 201) {
            toast.success('Pago hecho con éxito');
            return response.data;
          }
          if (response.status === 400) {
            toast.error(response.data.detail || 'Error generando el pago');
            return response.data;
          }
    }catch(error){
      if (error.response && error.response.data) {
        toast.error(error.response.data.detail || 'Error creando la compra');
      } else {
        toast.error('Error creando la compra');
      }
      console.error(error);
      throw error;
        
    }
}

export default PaymentsServices;