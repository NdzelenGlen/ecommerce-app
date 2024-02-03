export const  initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal =(basket) => 
basket?.reduce((amount , item) => item.price + amount, 0);


const firstamount = (basket) => basket?.reduce((amount , item) => item.price + amount, 0).toFixed(2);
const discount = (firstamount*0.08).toFixed(2);
export const getFinalAmount=(firstamount-discount)


const reducer=(state, action) => {

    switch(action.type) {
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'EMPTY_BASKET':
                return{
                    ...state,
                    basket:[]
                }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.Id === action.Id 
            );

           let newBasket = [...state.basket];
           if (index >= 0) {
            newBasket.splice(index, 1);
           } 
           else { console.warn(
            'Cant remove product  as it is not in the basket'
           )}
           return {
            ...state,
            basket:newBasket
           }
           case "SET_USER":
            return {
                ...state,
                user:action.user
            }

            default:
                return state;


               
    }
};
export default reducer;