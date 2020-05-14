import {DELCOMPANY, UPDATECOMPANY} from '../action/companyaction'

const initial=[
    {
        name:"Irish Food",
        email:"Irish.Food@gmail.com",
        ph:1234567891,
        acc_no:1414,
        country:"country4",
        country_served:["country1","country2","country3","country4","country5","country6","country7"]
    },
    {
        name:"Adidas",
        email:"Adidas@gmail.com",
        ph:2134567891,
        acc_no:6654,
        country:"country9",
        country_served:["country6","country7","country8","country9","country10","country11","country12"]
    },
    {   
        name:"Reebok",
        email:"Reebok@gmail.com",
        ph:3216459871,
        acc_no:41554,
        country:"country16",
        country_served:["country13","country14","country15","country16","country17","country18","country19"]
    }
        
    
]

 export const companyreducer = (state=[...initial],action) =>{
      switch (action.type) {
          case UPDATECOMPANY:
            const upd = [...state]
            upd.splice(action.id,1,action.payload)
            state=[...upd]    
              return state
          case DELCOMPANY:
            const val = [...state]
            val.splice(action.payload,1)
            state=[...val]    
               return state 
          default:
              return state
      }

  }