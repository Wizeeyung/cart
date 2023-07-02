import './index.css'
import logo from './images/logo-wiz.png'




const Navbar = (props)=>{

  const {count} =  props

  return (
    <nav className='nav-tab'>
      <img src={logo} alt='logo' className='logo'/>
      <ul className='nav-links'>
        <li>Home</li>
        <li>Products</li>
        <li>cart<span>{count}</span></li>
      </ul>
    </nav>
  )

}

export default Navbar;