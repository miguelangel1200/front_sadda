import axios from 'axios'

const ordenCompras = axios.create({
    baseURL: 'http://localhost:8000/api/compras'
})

export const getCompras = async () => {
    const res = await ordenCompras.get('/')
    return res.data;
}