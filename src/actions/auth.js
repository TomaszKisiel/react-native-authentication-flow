export const signInErrors = ( errors ) => ({
    type: "SIGN_IN_ERRORS",
    errors
})

export const signInVerify = _ => ({
    type: "SIGN_IN_VERIFY"
})

export const signIn = ( token ) => ({
    type: "SIGN_IN",
    token
})

export const signOut = _ => ({
    type: "SIGN_OUT"
})
