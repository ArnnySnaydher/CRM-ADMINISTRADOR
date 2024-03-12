<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
     <div>
        <div>
            <RouterLink :to="{name: 'home'}">
                Ver Cliente
            </RouterLink>
        </div>
        <h1 class="text-4xl font-extrabold text-slate-500">Agregar Cliente</h1>
    </div>
</template>



