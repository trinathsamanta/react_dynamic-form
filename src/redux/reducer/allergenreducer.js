import {ADDALLERGEN, DELALLERGEN, UPDATEALLERGEN} from '../action/allergenaction'

const initial=[
    {
        Name:"egg"
    },
    {
        Name:"celery"
    },
    {
        Name:"fish"
    },
    {
        Name:"milk"
    }
]

 export const allergenreducer = (state=[...initial],action) =>{
      switch (action.type) {
          case ADDALLERGEN:
              state=[...state,action.payload]
              return state
          case UPDATEALLERGEN:
            const upd = [...state]
            upd.splice(action.id,1,action.payload)
            state=[...upd]    
              return state
          case DELALLERGEN:
            const val = [...state]
            val.splice(action.payload,1)
            state=[...val]    
               return state 
          default:
              return state
      }

  }