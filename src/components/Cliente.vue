<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
    const props = defineProps({
        cliente:{
            type:Object
        }
    })

    const nombreCliente = computed(()=>{
        if(props.cliente){
            return props.cliente.nombre + ' ' + props.cliente.apellido
        }
        
    })
</script>
<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ nombreCliente }}</p>
            <p class="text-gray-500">{{ cliente? cliente.email:'' }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ cliente? cliente.empresa:'' }}</p>
            <p class="text-gray-600">{{ cliente? cliente.puesto:'' }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">

        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
          <RouterLink
          class="text-indigo-600 hover:text-indigo-900 mr-5" 
          to="/">Editar</RouterLink>
          <button
          class="text-red-600 hover:text-red-900">
            Eliminar
          </button>
        </td>
    </tr>
</template>