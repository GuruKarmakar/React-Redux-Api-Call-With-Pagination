import { FETCH_EMPLOYEE_PENDING, FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_ERROR,REMOVE_EMPLOYEE } from '../actions/employeeAction'

const initValue = {
    data: [],
    pending: false,
    error: ''
}

const employeeReducer = (state = initValue, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEE_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_EMPLOYEE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload
            }
        case FETCH_EMPLOYEE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        case REMOVE_EMPLOYEE:
            const newData  = state.data.filter(item => item.id !== action.payload)
            return {
                ...state,
                pending:false,
                data:newData
            }
        default:
            return state
    }

}

export default employeeReducer