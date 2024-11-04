<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import {formatearMonto} from '../helpers'


    const route = useRoute();
    
    const {id} = route.params

    const props = defineProps({
        cliente:{
            type: Object
        }
    })

    defineEmits(['actualizar-estado', 'eliminar-cliente'])

    const nombreCompleto = computed(()=>{
        return `${props.cliente.nombre} ${props.cliente.apellido}`
    })

    const estadoCliente = computed(()=>{
        return props.cliente.estado
    })

    

</script>
<template>
    
    <tr class="bg-indigo-200">
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ nombreCompleto }}</p>
            <p class="text-gray-500">{{ props.cliente.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ formatearMonto(props.cliente.monto) }}</p>
            <p class="text-gray-600">{{ props.cliente.destino }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">
            {{ props.cliente.telefono }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <RouterLink 
                :to="{name:'editar-cliente', params:{id: cliente.id}}"
                class="text-indigo-700 font-bold hover:text-indigo-500 mr-4"
            >
                Editar
            </RouterLink>
            <button
                class="text-red-700 font-semibold hover:text-red-500"
                @click="$emit('eliminar-cliente', cliente.id)"
            >
                Eliminar
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <button
                class="p-1 rounded-md"
                :class="[estadoCliente ? 'bg-green-200 font-semibold text-green-800' : 'bg-red-200 text-red-800']"
                @click="$emit('actualizar-estado', {id:cliente.id, estado:cliente.estado})"
            >
                {{ estadoCliente ? 'Aprobado' : 'Negado' }}
            </button>
        </td>

        
        
    </tr>
    
    
    
</template>



