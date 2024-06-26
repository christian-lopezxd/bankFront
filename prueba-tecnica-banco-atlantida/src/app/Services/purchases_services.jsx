import axios from 'axios';
import { toast } from 'react-toastify';

const url = 'http://localhost:5080';

const PurchasesServices = {};

PurchasesServices.getAll = async (id, pageNumber, pageSize) => {
  try {
    const response = await axios.get(`${url}/api/Transactions/0/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    if (response.status === 200) {
      return response.data;
    }
    if (response.status === 404) {
      toast.error('Recurso no encontrado');
      return null;
    }
  } catch (error) {
    toast.error('Error al obtener los datos');
    console.error(error);
    throw error;
  }
};

PurchasesServices.Create = async (id, date, description, amount) => {
  try {
    const response = await axios.post(`${url}/api/Transactions/Create`, {
      creditCardId: id,
      date: date,
      description: description,
      amount: amount,
      type: 0
    });
    if (response.status === 201) {
      toast.success('Compra creada con éxito');
      return response.data;
    }
    if (response.status === 400) {
      toast.error(response.data.detail || 'Error creando la compra');
      return response.data;
    }
  } catch (error) {
    if (error.response && error.response.data) {
      toast.error(error.response.data.detail || 'Error creando la compra');
    } else {
      toast.error('Error creando la compra');
    }
    console.error(error);
    throw error;
  }
};

export default PurchasesServices;
