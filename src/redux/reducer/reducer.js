import {ADD, DEL, UPDATE} from '../action/action'

const initial=[{
  companyselected:"Irish Food",
  production:'redchief',
  email:'dan@gmail.com',
  phone:"",
  address1:"asdsa",
  address2:"abcde",
  address3:"fghi",
  zip:711107,
  country:"India",
  countries2serve:[],
  managers: [{name:"tricky", email:"abcs@gmail.com", phone:"7894561234"},{name:"trickye", email:"abcds@gmail.com", phone:"7894561234"}],
  },
 
  {
    companyselected:"Adidas",
    production:'redchief',
    email:'dan@gmail.com',
    phone:"",
    address1:"asdsa",
    address2:"abcde",
    address3:"fghi",
    zip:711107,
    country:"India",
    countries2serve:[],
    managers: [{name:"tricky", email:"abcs@gmail.com", phone:"7894561234"},{name:"trickye", email:"abcds@gmail.com", phone:"7894561234"}],
  },{
    companyselected:"Reebok",
  production:'redchief',
  email:'dan@gmail.com',
  phone:"",
  address1:"asdsa",
  address2:"abcde",
  address3:"fghi",
  zip:711107,
  country:"India",
  countries2serve:[],
  managers: [{name:"tricky", email:"abcs@gmail.com", phone:"7894561234"},{name:"trickye", email:"abcds@gmail.com", phone:"7894561234"}],
  },{
    companyselected:"Kfc",
  production:'redchief',
  email:'dan@gmail.com',
  phone:"",
  address1:"asdsa",
  address2:"abcde",
  address3:"fghi",
  zip:711107,
  country:"India",
  countries2serve:[],
  managers: [{name:"tricky", email:"abcs@gmail.com", phone:"7894561234"},{name:"trickye", email:"abcds@gmail.com", phone:"7894561234"}],
  }]

 export const reducer = (state=[...initial],action) =>{
      switch (action.type) {
          case ADD:
              state=[...state,action.payload]
              return state
          case UPDATE:
            const upd = [...state]
            upd.splice(action.id,1,action.payload)
            state=[...upd]    
              return state
          case DEL:
            const val = [...state]
            val.splice(action.payload,1)
            state=[...val]    
               return state 
          default:
              return state
      }

  }