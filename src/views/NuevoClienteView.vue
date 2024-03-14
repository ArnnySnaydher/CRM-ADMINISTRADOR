<script setup lang="ts">
import { FormKit } from '@formkit/vue';
import axios from  'axios'
import RouterLink from '@/components/UI/RouterLink.vue';
import Heading from '@/components/UI/Heading.vue'
defineProps({
    titulo: {
        type: String,
    }
})

const handleSubmit = (data:Object)=>{
    axios.post("http://localhost:3000/clientes", data)
    .then((respuesta)=> console.log(respuesta))
    .catch(error => console.log(error))
}
</script>
<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to='home'>
                Ver Cliente
            </RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit type="form" submit-label="Agregar Cliente" incomplete-message="No se pudo enviar, revisa los mensajes" @submit="handleSubmit">

                    <FormKit 
                        type="text" 
                        label="Nombre" 
                        name="nombre"
                        placeholder="Nombre del Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"
                        >
                    </FormKit>

                    <FormKit 
                        type="text" 
                        label="Apellido" 
                        name="apellido"
                        placeholder="Apellido del Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El apellido del cliente es obligatorio' }"
                        >
                    </FormKit>

                    <FormKit 
                        type="text" 
                        label="Email" 
                        name="email"
                        placeholder="Email del Cliente"
                        validation="required|email"
                        :validation-messages="{ required: 'El email del cliente es obligatorio' ,email:'Coloca un email valido'}"
                       >
                    </FormKit>

                    <FormKit 
                        type="text" 
                        label="Telefono" 
                        name="telefono"
                        placeholder="Telefono: XXX-XXX-XXXX"
                        validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{ matches: 'El formato no es valido'}"
                       >
                    </FormKit>

                    <FormKit 
                        type="text" 
                        label="Empresa" 
                        name="empresa"
                        placeholder="Empresa de Cliente"
                       >
                    </FormKit>

                    <FormKit 
                        type="text" 
                        label="Puesto" 
                        name="puesto"
                        placeholder="Puesto de Cliente">
                    </FormKit>
                    

                </FormKit>


            </div>
        </div>
    </div>
</template>
<style>
.formkit-wrapper{
    max-width: 100%;
}
</style>