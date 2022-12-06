const obj = {
    data: [],
    favoriteList: [],
    inputValue: "",
    favoritesListName: "",
    lists: []
}

function reducer(state = obj, action) {
    switch(action.type) {
        case "inputChange": 
            return state = {...state, inputValue: action.value}
        case "submitForm": 
            return state = {...state, data: action.dataFromApi, inputValue: ""}
        case "favoriteListChange": 
            return state = {...state, favoriteList: [action.data, ...state.favoriteList]}
        case "reset":
            return state = {...state, data: []}
        case "deleteElement":
            state.favoriteList.splice(action.index, 1)
            return state = {...state, favoriteList: [...state.favoriteList]}
        case "FavouritesListNameValue":
            return state = {...state, favoritesListName: action.value}
        case "createList":
            return state = {...state, favoritesListName: "", lists: [...state.lists, action.payload], favoriteList: []}
        default: return state;
    }
}

export {reducer}