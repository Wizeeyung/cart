import './index.css'

const Production = (props)=>{

  const {product, addToCart} = props;

  const addToCartClick =()=>{
    addToCart()
    
  }

  return(
    <li className='production-container'>
        <img src={product.imageUrl} alt='product-pic'/>
        <h4>{product.name}</h4>
        <h5>{product.brand}</h5>
        <p>{product.price}</p>
        <button type='button' onClick={addToCartClick}>Add to cart</button>
    </li>
  )


}


export default Production;