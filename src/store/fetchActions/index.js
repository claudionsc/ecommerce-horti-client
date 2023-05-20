import { loadFrutas } from '..'
import api from '../../services/api'

export const getApi = () => {
    return (dispatch) => {
        api
            .get('/frutas')
            .then((res, req) => {
                dispatch(loadFrutas(res.data))
                // console.log(res.data)
            })
            .catch(console.log)
    }
}