export const ADDNUTRIENT = "ADDNUTRIENT"
export const UPDATENUTRIENT = "UPDATENUTRIENT"
export const DELNUTRIENT = "DELNUTRIENT"

export const addnutrient = value=>({
    type:ADDNUTRIENT,
    payload:value
})

export const updatenutrient = (value,id)=>({
    type:UPDATENUTRIENT,
    payload:value,
    id:id
})

export const delnutrient = value=>({
    type:DELNUTRIENT,
    payload:value
})