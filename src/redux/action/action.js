export const ADD = "ADD"
export const DEL = "DEL"

export const add = value=>({
    type:ADD,
    payload:value
})

export const del = value=>({
    type:DEL,
    payload:value
})