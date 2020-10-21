export const initialState = {
    isLoading: false,
    authToken: null,
    errors: {
        emailHint: false,
        passwordHint: false,
        message: null
    }
}

export const authReducer = ( state, action ) => {
    switch( action.type ) {
        case "SIGN_IN_ERRORS":
            return {
                ...state,
                isLoading: false,
                errors: {
                    ...action.errors
                }
            }
        case "SIGN_IN_VERIFY":
            return {
                ...state,
                isLoading: true,
            }
        case "SIGN_IN":
            return {
                ...state,
                isLoading: false,
                authToken: action.token,
            }
        case "SIGN_OUT": {
            return {
                ...state,
                authToken: null
            }
        }
        default:
            return { ...state }
    }
}
