const initialState = {
    userId: '',
    email: '',
    cart: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_SET_USER': return { userId: action.userId, email: action.email, cart: action.cart };
        case 'REMOVE_USERID': return { userId: '', email: '',cart: [] };
        case 'UPDATE_CART': return {...state, cart: action.products};
        default: return state;
    }
}

// 
export default reducer;