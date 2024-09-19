import axios from 'axios';
const url = 'http://localhost:5080';
import { toast } from 'react-toastify';
const CreditCardServices = {};


CreditCardServices.getAll = async (pageNumber, pageSize, search) => {
    try{
        const response = await axios.get(`${url}/api/creditcards?pageNumber=${pageNumber}&pageSize=${pageSize}&query=${search}`,   {
        
          }) 
        return response.data
    }catch(error){
        throw error
    }
}

CreditCardServices.getOne = async (id) => {
    try{
        const response = await axios.get(`${url}/api/creditcards/${id}`,   {
        
          }) 
       
        return response.data
    }catch(error){
        throw error
    }
}

CreditCardServices.Create = async (firstName, lastName, cardNumber, currentBalance, creditLimit, interestRate, minimumPaymentPercentage ) => {
    try {
        const response = await axios.post(`${url}/api/Creditcards`, {
            firstName: firstName,
            lastName: lastName,
            cardNumber: cardNumber,
            currentBalance: currentBalance,
            creditLimit: creditLimit,
            interestRate: interestRate,
            minimumPaymentPercentage: minimumPaymentPercentage,
            Transactions : []
          
        });
        if (response.status === 201) {
          toast.success('Tarjeta creada exitosamente');
          return response.data;
        }
       
      } catch (error) {
        if (error.response && error.response.data) {
          toast.error(error.response.data.detail || 'Error creando la compra');
        } 
        console.error(error);
        throw error;
      }

}



export default CreditCardServices;