import axios from 'axios'


export const getUsers = () => {

    return dispatch => {
        dispatch({
            type: "GET_USER",
            payload: axios.get("https://jsonplaceholder.typicode.com/users")
                .then(res => res.data)
        })
    }
}