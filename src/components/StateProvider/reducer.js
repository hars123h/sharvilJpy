export const initialstate = {
    page:true
   
};

const reducer = (state, action) => {
                   return{
                    page:action.item
                   }
}

export default reducer