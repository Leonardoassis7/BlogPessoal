import axios from "axios";
import { url } from "inspector";


export const api = axios.create({
    baseURL: 'https://db-blogpessoal-2mja.onrender.com'
})
export const cadastroUsuario = async(url:any,dados:any,setDado:any) => {
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
}


export const login = async(url:any,dados:any,setDado:any) => {
    const resposta = await api.post(url,dados)
    setDado(resposta.data.token)
}

export const busca = async(url: any,setDado:any,header:any) => {
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}
export const buscaId = async(url: any,setDado:any,header:any) => {
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const post = async(url: any, dado:any,setDado:any,header:any) => {
    const resposta = await api.post(url,dado,header)
    setDado(resposta.data)
}
export const put = async(url: any, dado:any,setDado:any,header:any) => {
    const resposta = await api.put(url,dado,header)
    setDado(resposta.data)
}

export const deleteId = async(url: any, header:any) => {
    await api.delete(url, header)
}