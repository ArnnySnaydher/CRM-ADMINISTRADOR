import api from "../lib/axios"

interface modulo{
    data:Object
}
export default{
    obtenerClientes(){
        return api.get('/clientes')
    },
    agregarCliente(data:modulo){
        return api.post("/clientes",data)
    }
}