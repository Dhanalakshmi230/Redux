const initialState = {
    age: 0 
  };
  
  const reducer = (state = initialState, action) => {
    const newvalue = { ...state };
  
    switch (action.type) {
      case "AGE_UP":
        newvalue.age += action.value;
        break;
  
      case "AGE_DOWN":
        newvalue.age -= action.value;
        break;
        default:break;
    }
    

   
    return newvalue;
  };
  
  export default reducer;