const obj = {
    data: [],
    favouriteList: [],
    inputValue: ""
}

function reducer(state = obj, action) {
    switch(action.type) {
        case "inputChange": 
            return state = {...state, inputValue: action.value}
        case "submitForm": 
            return state = {...state, data: [action.dataFromApi]}
        default: return state;
    }
}

export {reducer}