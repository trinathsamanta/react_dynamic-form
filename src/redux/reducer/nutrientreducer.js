import { ADDNUTRIENT, UPDATENUTRIENT, DELNUTRIENT } from '../action/nutrientaction'

const initial=[
    {
        
        name:"carbs",
        DailyAmt:1,
        unit:"kcal",
    },
    {
        
        name:"carbs Sugars",
        DailyAmt:2,
        unit:"kcal",
    },
    {
        
        name:"Energy",
        DailyAmt:3,
        unit:"g",
    },
    {
       
        name:"Fats",
        DailyAmt:4,
        unit:"g",
        
    }
]

 export const nutrientreducer = (state=[...initial],action) =>{
      switch (action.type) {
          case ADDNUTRIENT:
              state=[...state,action.payload]
              return state
          case UPDATENUTRIENT:
            const upd = [...state]
            upd.splice(action.id,1,action.payload)
            state=[...upd]    
              return state
          case DELNUTRIENT:
            const val = [...state]
            val.splice(action.payload,1)
            state=[...val]    
               return state 
          default:
              return state
      }

  }