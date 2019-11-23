export const FETCH_EMPLOYEE_PENDING = "FETCH_EMPLOYEE_PENDING"
export const FETCH_EMPLOYEE_SUCCESS = "FETCH_EMPLOYEE_SUCCESS"
export const FETCH_EMPLOYEE_ERROR = "FETCH_EMPLOYEE_SUCCESS"
export const UPDATE_EPLOYEE_DATA = "UPDATE_EPLOYEE_DATA"
export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE"

const fetchEmplyeePending = () => ({
    type: FETCH_EMPLOYEE_PENDING
})

const fetchEmplyeeSuccess = json => ({
    type: FETCH_EMPLOYEE_SUCCESS,
    payload: json
})

const fetchEmplyeeError = error => ({
    type: FETCH_EMPLOYEE_ERROR,
    payload: error
})

const removeEmployee = (id) => ({
    type: REMOVE_EMPLOYEE,
    payload: id
})

// const editEmplyee = json => ({
//     type: UPDATE_EPLOYEE_DATA,
//     payload: json
// })

export const fetchEmplyee = () => {
    return async dispatch => {
        dispatch(fetchEmplyeePending())
        try {
            const response = await fetch('http://dummy.restapiexample.com/api/v1/employees')
            const result = await response.json()
            dispatch(fetchEmplyeeSuccess(result))
            return result
        } catch (error) {
            dispatch(fetchEmplyeeError(error))
        }
    }
}

export const deleteEmployee = (id) => {
    return async dispatch => {
        try {
            const response = await fetch(`http://dummy.restapiexample.com/api/v1/delete/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
            const result = await response.json()
            alert('Are u sure?', dispatch(removeEmployee(id)))
            return result
        } catch (error) {
            dispatch(() => console.log(error))
        }
    }
}

// export const updateEmplyee = (id, name, age, sallary) => {
//     return async dispatch => {
//         try {
//             const response = await fetch(`http://dummy.restapiexample.com/api/v1/update/${id}`, {
//                 method: 'PUT',
//                 headers: { 'content-type': 'application/json' },
//                 body: {
//                     name,
//                     age,
//                     sallary
//                 }
//             })
//             const result = await response.json()
//             console.log(result)
//             dispatch(editEmplyee(result))
//         } catch (error) {

//         }
//     }
// }