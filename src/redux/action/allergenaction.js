export const ADDALLERGEN = "ADDALLERGEN"
export const UPDATEALLERGEN = "UPDATEALLERGEN"
export const DELALLERGEN = "DELALLERGEN"

export const addallergen = value=>({
    type:ADDALLERGEN,
    payload:value
})

export const updateallergen = (value,id)=>({
    type:UPDATEALLERGEN,
    payload:value,
    id:id
})

export const delallergen = value=>({
    type:DELALLERGEN,
    payload:value
})