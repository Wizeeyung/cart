import {Component} from 'react';
import Navbar from './components/navbar/index';
import Banner from './components/banner/index';
import './App.css';
import Production from './components/production/index';
import Footer from './components/footer/index';


const dealsList = [
  { id: '1',
    imageUrl: 'https://www.musicmagpie.co.uk/store/spree/products/6337073/product/AI000000040902__Graphite__1.jpg?1646393896',
    name: 'Iphone 13 Pro Max',
    brand: 'Apple',
    price: 93000
  },
  { id: '2',
    imageUrl: 'https://www.musicmagpie.co.uk/store/spree/products/5266393/product/8156__Cosmic_Grey__1.jpg?1596769445',
    name: 'Samsung 13 Pro Max',
    brand: 'Samsung',
    price: 83000
  },
  { id: '3',
    imageUrl: 'https://www.musicmagpie.co.uk/store/spree/products/6427266/product/PI000000041537__Black__1.jpg?1649986900',
    name: 'Samsung Galaxy 22',
    brand: 'Samsung',
    price: 124000
  },
  { id: '4',
    imageUrl: 'https://www.musicmagpie.co.uk/store/spree/products/4441241/product/7668__Prism_White__1.jpg?1565148929',
    name: 'Iphone 13 Pro Max',
    brand: 'Apple',
    price: 93000
  },
]



const headPhoneList = [
  { id: '1',
    imageUrl: 'https://www.musicmagpie.co.uk/store/spree/products/4251002/product/7350088302156_1.jpg?1561561937',
    name: 'Urbanista New York',
    brand: 'Apple',
    price: 80000
  },
  { id: '2',
    imageUrl: 'https://www.musicmagpie.co.uk/store/spree/products/6571243/product/0190199312937_1.jpg?1654863247',
    name: 'Beat Studio 3',
    brand: 'JBL',
    price: 103000
  },
  { id: '3',
    imageUrl: 'https://www.musicmagpie.co.uk/store/spree/products/4735048/product/V7350088302163.jpg?1574349706',
    name: 'Urbanista Drey',
    brand: 'Samsung',
    price: 200000
  },
  { id: '4',
    imageUrl: 'https://www.musicmagpie.co.uk/store/spree/products/6635007/product/UI090000038842__Black__1.jpg?1658408377',
    name: 'Bose Wireless Headphones',
    brand: 'Apple',
    price: 93000
  },
  { id: '5',
    imageUrl: 'https://www.musicmagpie.co.uk/store/spree/products/5928326/product/5705260078022_1.jpg?1625152318',
    name: 'Bang & Olufsen',
    brand: 'B & O',
    price: 73000
  },
  { id: '6',
    imageUrl: 'https://www.musicmagpie.co.uk/store/spree/products/5928329/product/5705260078046_1.jpg?1625153034',
    name: 'Bang & Olufsen Black',
    brand: 'B & O',
    price: 200000
  },
  { id: '7',
    imageUrl: 'https://www.musicmagpie.co.uk/store/spree/products/1552526/product/18535_xxl.png?1495542491',
    name: 'Urbanista wired',
    brand: 'Urban',
    price: 150000
  },
  { id: '8',
    imageUrl: 'https://www.musicmagpie.co.uk/store/spree/products/1552911/product/24495_xxl.png?1495544139',
    name: 'Urbanista wired',
    brand: 'Urbanio',
    price: 63000
  },
]



class App extends Component{

  state = {countCart: 0}

  addToCart = ()=>{
    this.setState(prev=> ({countCart: prev.countCart + 1}))
  }

  render(){

    const {countCart} = this.state
    return (
      <div>
        <Navbar count = {countCart} />
        <div className='header'> 
          <Banner />
        </div>

        <div className='production-section'>
          <h1>Deals Of The Day</h1>
          <ul className='product-container'>
            {dealsList.map((el)=> <Production product= {el} key={el.id}  addToCart= {this.addToCart}/>)}
          </ul>
        </div>

        <div className='production-section pad'>
          <h1>All Products</h1>
          <ul className='product-container'>
            {headPhoneList.map((el)=> <Production product= {el} key={el.id} addToCart = {this.addToCart} />)}
          </ul>
        </div>

        <footer>
          <Footer />
          
        </footer>

      </div>
    )

  }
}


export default App;