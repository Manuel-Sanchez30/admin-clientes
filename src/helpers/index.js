export const formatearMonto = (monto)=>{
    return Number(monto).toLocaleString('es-US', {
        style:'currency',
        currency: 'USD'
    })
}