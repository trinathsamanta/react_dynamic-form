export const UPDATECOMPANY = "UPDATECOMPANY"
export const DELCOMPANY = "DELCOMPANY"

export const updatecompany = (value,id)=>({
    type:UPDATECOMPANY,
    payload:value,
    id:id
})

export const delcompany = value=>({
    type:DELCOMPANY,
    payload:value
})