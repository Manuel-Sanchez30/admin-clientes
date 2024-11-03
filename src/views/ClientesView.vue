<script setup>

import { onMounted, ref, computed } from "vue";

import RouterLink from '@/components/UI/RouterLink.vue';
import Header from '../components/UI/Header.vue';
import Cliente from "@/components/Cliente.vue";
import clienteServices from "@/services/clienteServices";

defineProps({
    titulo:{
        type: String,
        required: true,
    }
})


const clientes = ref([])

onMounted(()=>{
    clienteServices.obtenerClientes()
        .then(({data}) => clientes.value = data)
        .catch(err => console.log('Hubo un error'))
})

const existenClientes = computed(()=>{
    return clientes.value.length > 0
})

const actualizarEstado = ({id, estado})=>{
    clienteServices.cambiarEstado(id, {estado: !estado})
        .then(()=>{
            const i = clientes.value.findIndex(cliente => cliente.id === id)
            clientes.value[i].estado = !estado
        })
        .catch(err => console.log(err))
}

const eliminarCliente = (id)=>{
    clienteServices.eliminarCliente(id)
        .then(()=>{
            clientes.value = clientes.value.filter(cliente => cliente.id !== id)
        })
        .catch(err => console.log(err))
}

</script>

<template>
    <div>
        
        <div class="flex justify-end">
            <RouterLink to="agregar-cliente">
                Agregar Cliente
            </RouterLink>
        </div>
        
        <Header>{{ titulo }}</Header>

        <div v-if="existenClientes" class="flow-root mx-auto  mt-10 p-5 bg-white shadow rounded-md">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300 bg-indigo-700 rounded-md">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-white">Nombre</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-white">Monto</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-white">Telefono</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-white">Acciones</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-white">Estado</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <Cliente
                                v-for="cliente in clientes"
                                :key="cliente.id"
                                :cliente="cliente"
                                @actualizar-estado="actualizarEstado"
                                @eliminar-cliente="eliminarCliente"
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <p 
            v-else
            class="text-center text-white font-bold text-3xl"    
        >No Hay Clientes</p>

    </div>
</template>



