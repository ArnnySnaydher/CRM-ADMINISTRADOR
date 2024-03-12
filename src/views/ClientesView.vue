<script setup lang="ts">
import axios from 'axios';
import { onMounted } from 'vue';
import RouterLink from '@/components/UI/RouterLink.vue';
import Heading from '@/components/UI/Heading.vue'

onMounted(()=>{
    axios.get("http://localhost:3000/clientes").then(({data}) =>{
        console.log(data)
    })
})
defineProps({
    titulo: {
        type: String
    }
})
</script>
<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="agregar-cliente">
                Agregar Cliente
            </RouterLink>

        </div>

        <Heading>{{ titulo }}</Heading>


    </div>

</template>
