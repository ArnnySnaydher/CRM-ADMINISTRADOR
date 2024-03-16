import api from "../lib/axios"

interface clienteData {
    data: Object,
    id: string
}
export default {
    obtenerClientes() {
        return api.get('/clientes')
    },
    agregarCliente(data: clienteData) {
        return api.post("/clientes", data)
    },
    obtenerCliente(id: string) {
        return api.get('/clientes/' + id)
    },

    actualizarCliente(id:string, data:clienteData) {
        return api.patch('/clientes/' + id, data);
    },
    cambiarEstado(id: string, data:clienteData) {
         return api.patch('/clientes/' + id, data)
    },
    eliminarCliente(id){
        return api.delete('/clientes/' + id)
    }

}