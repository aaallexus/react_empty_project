import {client} from './axios'
import {setAccessToken} from './actions/main.js'

export const checkToken = globalStore => next => action => {
    client.defaults.headers.common['Authorization'] = 'Bearer  '+globalStore.getState().main.accessToken
    if(action.type!=='LOGIN'
        && action.type!=='SET_ACCESS_TOKEN'
        && action.type!='@@router/LOCATION_CHANGE')
    {
        if(globalStore.getState().main.accessToken!==null)
        {
            let tokenExpire;
            try{
                let parts=globalStore.getState().main.accessToken.split('.')
                tokenExpire=new Date(JSON.parse(atob(parts[1])).exp*1000)
            }
            catch{
            }
            let curTime=new Date();
            if(tokenExpire<=curTime)
            {
                client.post('../token/refresh/',{
                    refresh:globalStore.getState().main.refreshToken
                })
                .then(function(response){
                    globalStore.dispatch(setAccessToken(response.data.access))
                    client.defaults.headers.common['Authorization'] = 'Bearer  '+response.data.access;
                })
            }
            else
                return next(action)
        }
        else
            return next(action)
    }
    else
        return next(action)
}
