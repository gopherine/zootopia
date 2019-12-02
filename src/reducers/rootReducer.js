import {createStore} from 'redux';

const initialState = {
    animals: [{
                name:"Pinky the rabbit",
                type:"Rabbit",
                date:new Date('December 1, 2019 11:20:25'),
                cycle:1
                },
                {
                    name:"Pingu the Penguin",
                    type:"Penguin",
                    date:new Date('December 1, 2019 11:20:25'),
                    cycle:1
                },{
                    name:"Raja the Elephant",
                    type:"Elephant",
                    date:new Date('December 1, 2019 11:20:25'),
                    cycle:3
                },
            ],

    filteredAnimals:[]
}
export const store = createStore(rootReducer,initialState)

function rootReducer(state= initialState, {type,payload}) {
    switch(type){
        case 'FETCH_ANIMAL':
            return { ...state, animals:[...state.animals],filteredAnimals:[...state.animals]}
        case 'INSERT_ANIMAL':
            return { ...state,animals:[...state.animals,payload],filteredAnimals:[...state.animals,payload]}
        case 'DELETE_ANIMAL':
            state.animals = state.animals.filter(function(returnableObjects){
                    return returnableObjects.name !== payload;
             });
            return {...state, animals:state.animals, filteredAnimals:state.animals}
        case 'SEARCH_ANIMAL':
             state.filteredAnimals = state.animals.filter(function(returnableObjects){
                 if(payload === void(0)|| payload === ""){
                     console.log(payload)
                    return returnableObjects
                 }
                 console.log(payload)
                 return returnableObjects.name === payload;
             });
             return {...state,animals:[...state.animals], filteredAnimals:[...state.filteredAnimals]}
        default:
            return state;
    }
}

export default rootReducer;