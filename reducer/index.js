
const initialState = {
    users: [],
    error:""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "GET_USER_PENDING":
            return { ...state }

        case "GET_USER_FULFILLED":
            return { ...state, users: payload }

        case "GET_USER_REJECTED":
            return { ...state ,error:payload.message}

        default:
            return state
    }
}