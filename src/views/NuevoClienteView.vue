<script setup lang="ts">
import { FormKit } from '@formkit/vue';
import RouterLink from '@/components/UI/RouterLink.vue';
import Heading from '@/components/UI/Heading.vue'
defineProps({
    titulo:{
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
        <Heading >{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <FormKit type="form">

                <FormKit 
                type="text"
                label="Nombre"
                placeholder="Nombre de Cliente"
                help="Coloca el Nombre del Cliente que seas registrar"
                validation="required"
                :validation-messages="{required: 'El nombre del cliente es obligatorio'}"
                validation-visibility="submit"
                ></FormKit>

            </FormKit>
        </div>
    </div>
</template>



