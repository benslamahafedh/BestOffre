const getProductById =(Reference,type)=>{
    return type.find((product)=>product.Reference === Reference)
  };
  export default getProductById;