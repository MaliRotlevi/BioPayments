import * as ActionTypes from '../ActionTypes';


const initialState={
    travelsToUserList:[{}]
}

export const travelsToUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TRAVELSTOUSER_SAVED:
            return { ...state, travelsToUserList: action.payload }
        // case ActionTypes.TODO_DELETED:
        //     let arr = state.todoList.filter((item) => item.id !== action.payload.id);
        //     // let selectedToDo = state.selectedToDo&&action.id === state.selectedToDo.id ? null : state.selectedToDo;
        //     return { ...state, todoList: arr };
        
       
    }
    return state;
}