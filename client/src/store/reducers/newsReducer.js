const initialState = {
    news: []
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NEWS":
            return {
                ...state,
                news: action.payload
            }

        default:
            return state;
    }
}