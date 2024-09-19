import axios from "axios";
const url = 'http://localhost:5080';

const TransactionsServices = {};

TransactionsServices.getAll = async (id, pageNumber, pageSize) => {
    try{
        const response = await axios.get(`${url}/api/Transactions/all/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}`,   {
        
          }) 
          
          if(response.status==200){
            return response.data
          }

          if(response.status==404){
            return response.data.title
          }
    }catch(error){
        console.log(error)
        throw error
        
    }
}

export default TransactionsServices;