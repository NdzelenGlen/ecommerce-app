export const  initialState = {
    basket: [],
    user: null,
    discount:[],
    finalamount:[]
};
// selector
export const getBasketTotal =(basket) => 
basket?.reduce((amount , item) => item.price + amount, 0);

export const getDiscount = (discount) => discount?.reduce((amount, item) => ((item.price + amount) * 0.15), 0);



const reducer=(state, action) => {

    switch(action.type) {
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.Id === action.Id 
            );

           let newBasket = [...state.basket];
           if (index >= 0) {
            newBasket.splice(index, 1);
           } 
           else { console.warn(
            'Cant remove product (id: ${action.id}) as it is not in the basket'
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