import { ADDHOLIDAY, UPDATEHOLIDAY, DELHOLIDAY } from '../action/holidayaction'

const initial=[]

 export const holidayreducer = (state=[...initial],action) =>{
      switch (action.type) {
          case ADDHOLIDAY:
              state=[...state,action.payload]
              return state
          case UPDATEHOLIDAY:
            const upd = [...state]
            upd.splice(action.id,1,action.payload)
            state=[...upd]    
              return state
          case DELHOLIDAY:
            const val = [...state]
            val.splice(action.payload,1)
            state=[...val]    
               return state 
          default:
              return state
      }

  }