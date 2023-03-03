import axios from "axios";
import { url } from "inspector";


export const api = axios.create({
    baseURL: 'https://db-blogpessoal-2mja.onrender.com'
})
export const cadastroUsuario = async(url:any,dados:any,setDados:any) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}


export const login = async(url:any,dados:any,setDados:any) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data.token)
}

