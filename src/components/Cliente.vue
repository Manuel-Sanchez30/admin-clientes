<script setup>
import { computed } from 'vue';


    const props = defineProps({
        cliente:{
            type: Object
        }
    })

    const nombreCompleto = computed(()=>{
        return `${props.cliente.nombre} ${props.cliente.apellido}`
    })

</script>
<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ nombreCompleto }}</p>
            <p class="text-gray-500">{{ props.cliente.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ props.cliente.monto }}</p>
            <p class="text-gray-600">{{ props.cliente.destino }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">
            {{ props.cliente.telefono }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <RouterLink 
                to="/"
                class="text-indigo-700 font-bold hover:text-indigo-500"
            >
                Editar
            </RouterLink>
            <button
                class="text-red-700 font-bold hover:text-red-500"
            >
                Eliminar
            </button>
        </td>
    </tr>
</template>



