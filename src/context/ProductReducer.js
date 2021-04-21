import StoreProduct from './StoreProduct'
import apiServer from '../api/apiServer'

const productReducer = (state, action) => {
    switch (action.type) {
        case 'get_product':
            return action.payload
        case 'delete_product':
            return state.filter((data) => data.id !== action.payload)
        default:
            return state
    }
}

const getAllProduct = (dispatch) => {
    return async () => {
        const respone = await apiServer.get('/product/getallproducts')
        const ambildata = respone.data.response.data
        dispatch({ type: 'get_product', payload: ambildata })
    }
}

const addProduct = (dispatch) => {
    return async (id, product, variant, outlet,
        category, price, cost, callback) => {
        await apiServer.post(`/product/createproduct`, {
            id, product, variant, outlet, category
            , price, cost
        })
        if (callback) {
            callback()
        }
    }
}

const deleteProduct = (dispatch) => {
    return async (id) => {
        await apiServer.delete(`/product/deleteproduct/${id}`)
        dispatch({ type: 'delete_product', payload: id })
    }
}


export const { Context, Provider } = StoreProduct(
    productReducer,
    { addProduct, deleteProduct, getAllProduct },
    [],
)