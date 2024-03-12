<script setup lang="ts">
import { FormKit } from '@formkit/vue';
import RouterLink from '@/components/UI/RouterLink.vue';
import Heading from '@/components/UI/Heading.vue'
defineProps({
    titulo: {
        type: String,
    }
})
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
                <FormKit type="form">

                    <FormKit 
                        type="text" 
                        label="Nombre" 
                        placeholder="Nombre del Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"
                        >
                    </FormKit>

                    <FormKit 
                        type="text" 
                        label="Apellido" 
                        placeholder="Apellido del Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El apellido del cliente es obligatorio' }"
                        >
                    </FormKit>

                    <FormKit 
                        type="text" 
                        label="Email" 
                        placeholder="Email del Cliente"
                        validation="required|email"
                        :validation-messages="{ required: 'El email del cliente es obligatorio' ,email:'Coloca un email valido'}"
                       >
                    </FormKit>

                    <FormKit 
                        type="text" 
                        label="Telefono" 
                        placeholder="Telefono: XXX-XXX-XXXX"
                        validation="required|number"
                        :validation-messages="{ required: 'El email del cliente es obligatorio' ,number:'Coloca un telefono valido'}"
                       >
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