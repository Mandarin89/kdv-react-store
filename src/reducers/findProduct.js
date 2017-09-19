
export default function findProduct(state = [], action){
    if(action.type === 'FIND_PRODUCT'){
        return action.payload;
    }
    return state;
}