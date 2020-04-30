export const ADD = "ADD"
export const UPDATE = "UPDATE"
export const DEL = "DEL"

export const add = value=>({
    type:ADD,
    payload:value
})

export const update = (value,id)=>({
    type:UPDATE,
    payload:value,
    id:id
})

export const del = value=>({
    type:DEL,
    payload:value
})