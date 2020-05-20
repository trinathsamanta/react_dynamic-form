export const ADDHOLIDAY = "ADDHOLIDAY"
export const UPDATEHOLIDAY = "UPDATEHOLIDAY"
export const DELHOLIDAY = "DELHOLIDAY"

export const addholiday = value=>({
    type:ADDHOLIDAY,
    payload:value
})

export const updateholiday = (value,id)=>({
    type:UPDATEHOLIDAY,
    payload:value,
    id:id
})

export const delholiday = value=>({
    type:DELHOLIDAY,
    payload:value
})