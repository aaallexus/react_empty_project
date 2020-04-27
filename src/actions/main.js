export function loginRequest(param) {
    return {
        type: 'LOGIN',
        payload: {
            request: {
                url:'../token/',
                method:'POST',
                data:{
                    username:param.login,
                    password:param.password
                },
            },
        },
    }
}
