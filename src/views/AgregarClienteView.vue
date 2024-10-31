<script setup>
import Header from '@/components/UI/Header.vue';
import RouterLink from '@/components/UI/RouterLink.vue';
import {FormKit} from '@formkit/vue'

defineProps({
    titulo:{
        type: String,
        required: true,
    }
})

const handleSubmit = (data)=>{
    console.log(data)
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
                submit-label="Agregar Cliente"
                incomplete-message="No se Pudo enviar, Revisar"
                @submit="handleSubmit"
                
            >
                <FormKit
                    type="text"
                    label="Nombre"
                    name="nombre"
                    placeholder="Nombre del Cliente"
                    validation="required"
                    :validation-messages="{required:'Nombre del Cliente es Obligatorio'}"
                />

                <FormKit
                    type="text"
                    label="Apellido"
                    name="apellido"
                    placeholder="Apellido del Cliente"
                    validation="required"
                    :validation-messages="{required:'Apellido del Cliente es Obligatorio'}"
                />

                <FormKit
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Email del Cliente"
                    validation="required | email"
                    :validation-messages="{required:'Email del Cliente es Obligatorio', email:'Formato invalido'}"
                />

                <FormKit
                    type="number"
                    label="Telefono"
                    name="telefono"
                    placeholder="Telefono del Cliente"
                    validation="required"
                    :validation-messages="{required:'Telefono del Cliente es Obligatorio'}"
                />

                <FormKit
                    type="number"
                    label="Monto"
                    name="monto"
                    placeholder="Monto del credito"                    
                />

                <FormKit
                    type="text"
                    label="Destino"
                    name="destino"
                    placeholder="Destino del credito"                    
                />


            </FormKit>
        </div>
        
    </div>
</template>



