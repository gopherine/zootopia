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
            ]
}
export const store = createStore(rootReducer,initialState)

function rootReducer(state= initialState, {type,payload}) {
    switch(type){
        case 'INSERT_ANIMAL':
            return { ...state,
                    animals:[...state.animals,payload]}
        case 'DELETE_ANIMAL':
            state.animals = state.animals.filter(function(returnableObjects){
                    return returnableObjects.name !== payload;
             });
            return {...state, animals:state.animals}
        case 'SEARCH_ANIMAL':
             if (payload===undefined) {
                 return state
             }
             state.animals = state.animals.filter(function(returnableObjects){
                return returnableObjects.name === payload;
             });
             return {...state, animals:state.animals}
        default:
            return state;
    }
}

export default rootReducer;