import {db} from '../fire';

const getSetUserData = (userId, email, data) => {
    return{
        type: 'GET_SET_USER',
        userId: userId,
        email: email,
        cart: data
    }
}

export const getSetUser = (userId, email) => {
    return dispatch => {

        const usersRef = db.collection('users').doc(userId)

        usersRef.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
            usersRef.onSnapshot((doc) => {
                dispatch(getSetUserData(userId, email, doc.data().cart));
            });
            } else {
            usersRef.set({
                email: email,
                cart: []
            }) // create the document
                dispatch(getSetUserData(userId, email, []));
            }
        });



        // const docRef = db.collection("users").doc(userId);

        // docRef.get().then((doc) => {
        //     dispatch(getUserData(userId, email, doc.data()));
        // }).catch((error) => {
        //     alert("Error getting document:", error.message);
        // });
    }
}

const updateData = (products) => {
    return {
        type: 'UPDATE_CART',
        products: products
    }
}



export const onAddCart = ( userid, email, product, allCartProducts ) => {
    const products = [...allCartProducts];
    products.push(product);      

    return dispatch => {
        dispatch(updateData(products));
        db.collection("users").doc(userid).update({
            cart: products
        }, {merged: true})
        .catch((error) => {
            // console.error("Error writing document: ", error);
            alert(error);
        });
    }    
}

export const onRemoveCart = (userid, products) => {  

    return dispatch => {        
        dispatch(updateData(products));
        db.collection("users").doc(userid).update({
            cart: products
        },{merger: true})
        .catch((error) => {
            // console.error("Error writing document: ", error);
            alert(error);
        });
    }    
}