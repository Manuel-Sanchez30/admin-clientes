<script setup>
import {reactive, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router';
import Header from '@/components/UI/Header.vue';
import RouterLink from '@/components/UI/RouterLink.vue';
import {FormKit} from '@formkit/vue';
import clienteServices from '@/services/clienteServices';


defineProps({
    titulo:{
        type: String,
        required: true,
    }
})

const route = useRoute();
const router = useRouter();

const {id} = route.params;

const formData = reactive({});

onMounted(()=>{
    clienteServices.obtenerCliente(id)
        .then(({data})=>{
            Object.assign(formData,data)
        })
        .catch(err => console.log(err))
})

const handleSubmit = (data)=>{
    clienteServices.actualizarCliente(id, data)
        .then(() => router.push({name:'inicio'}))
        .catch(err => console.log(err))
}

</script>

<template>
    <div>
        
        <div class="flex justify-end">
            <RouterLink to="inicio">
                Volver
            </RouterLink>
        </div>

        <Header>{{ titulo }}</Header>

        <div class="mx-auto mt-10 bg-white shadow md:w-3/5 p-3 rounded-md">
            <FormKit 
                type="form"
                submit-label="Editar Cliente"
                incomplete-message="No se Pudo enviar, Revisar"
                @submit="handleSubmit"
                :value="formData"
                
            >
                <FormKit
                    type="text"
                    label="Nombre"
                    name="nombre"
                    placeholder="Nombre del Cliente"
                    validation="required"
                    :validation-messages="{required:'Nombre del Cliente es Obligatorio'}"
                    v-model="formData.nombre"
                />

                <FormKit
                    type="text"
                    label="Apellido"
                    name="apellido"
                    placeholder="Apellido del Cliente"
                    validation="required"
                    :validation-messages="{required:'Apellido del Cliente es Obligatorio'}"
                    v-model="formData.apellido"
                />

                <FormKit
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Email del Cliente"
                    validation="required | email"
                    :validation-messages="{required:'Email del Cliente es Obligatorio', email:'Formato invalido'}"
                    v-model="formData.email"
                />

                <FormKit
                    type="number"
                    label="Telefono"
                    name="telefono"
                    placeholder="Telefono del Cliente"
                    validation="required"
                    :validation-messages="{required:'Telefono del Cliente es Obligatorio'}"
                    v-model="formData.telefono"
                />

                <FormKit
                    type="number"
                    label="Monto"
                    name="monto"
                    placeholder="Monto del credito"
                    v-model="formData.monto"                    
                />

                <FormKit
                    type="text"
                    label="Destino"
                    name="destino"
                    placeholder="Destino del credito"
                    v-model="formData.destino"                    
                />


            </FormKit>
        </div>
        
    </div>
</template>



