<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { FormKit } from '@formkit/vue';
import { useRouter, useRoute } from 'vue-router';
import ClienteService from '@/services/ClienteService';
import RouterLink from '@/components/UI/RouterLink.vue';
import Heading from '@/components/UI/Heading.vue'

const router = useRouter();
const route = useRoute()
const { id } = route.params

const formData = reactive({
})

onMounted(() => {
    const idString = Array.isArray(id) ? id[0] : id.toString();
    ClienteService.obtenerCliente(idString)
        .then(({ data }) => {
            Object.assign(formData, data)

        })
        .catch(error => console.log(error))
})
defineProps({
    titulo: {
        type: String,
    }
})


const handleSubmit = (data: any) => {

}
</script>
<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to='listado-clientes'>
                Atras
            </RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit type="form" submit-label="Actualizar Cliente"
                    incomplete-message="No se pudo enviar, revisa los mensajes" @submit="handleSubmit"
                    :value="formData">

                    <FormKit type="text" label="Nombre" name="nombre" placeholder="Nombre del Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"
                        v-model="formData.nombre">
                    </FormKit>

                    <FormKit type="text" label="Apellido" name="apellido" placeholder="Apellido del Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El apellido del cliente es obligatorio' }"
                        v-model="formData.apellido">
                    </FormKit>

                    <FormKit type="text" label="Email" name="email" placeholder="Email del Cliente"
                        validation="required|email"
                        :validation-messages="{ required: 'El email del cliente es obligatorio', email: 'Coloca un email valido' }"
                        v-model="formData.email">
                    </FormKit>

                    <FormKit type="text" label="Telefono" name="telefono" placeholder="Telefono: XXX-XXX-XXXX"
                        validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{ matches: 'El formato no es valido' }" v-model="formData.telefono">
                    </FormKit>

                    <FormKit type="text" label="Empresa" name="empresa" placeholder="Empresa de Cliente"
                        v-model="formData.empresa">
                    </FormKit>

                    <FormKit type="text" label="Puesto" name="puesto" placeholder="Puesto de Cliente"
                        v-model="formData.puesto">
                    </FormKit>


                </FormKit>


            </div>
        </div>
    </div>
</template>
<style>
.formkit-wrapper {
    max-width: 100%;
}
</style>