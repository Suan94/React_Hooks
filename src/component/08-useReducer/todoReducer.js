// import { useReducer } from "react";


export const todoReducer = ( state = [], action ) => {
  
    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];
        
        case 'delete':
            return state.filter( todo => todo.id !== action.payload );
    
        case 'toggle':
            return state.map( todo => 
                todo.id === action.payload 
                    ? { ...todo, done: !todo.done } 
                    : todo
            )


        case 'toggle-old':
            return state.map( todo => {

                if( todo.id === action.payload ) {
                    return { 
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
                
            });


        default:
            return state;
    }

};




// export const todoReducer = ( state = [], action ) => {

//     if( action.type === 'AddTODO' )
//         return [...state, action.payload];

//     if( action.type === 'RemoveTODO' )
//         return state.filter( todo => todo.id !== action.payload );
    
//     if( action.type === 'CompleteTODO' )
//         return state.map( todo => 
//             ( todo.id === action.payload )
//                 ?{ ...todo, done: !todo.done }    
//                 :todo
//         );


//     if( action.type === 'CompleteTODO_OLD' )
//         return state.map( todo => {
//             if( todo.id === action.payload ){
//                 return {
//                     ...todo,
//                     done: !todo.done
//                 }
//             }else{
//                 return todo;
//             }
//         })
    
    
//     return state

// };
