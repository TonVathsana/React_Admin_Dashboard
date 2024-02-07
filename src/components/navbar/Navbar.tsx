import './navbar.scss'
import logo from "../../assets/301805943_483344347132532_3760532410528887546_n-removebg-preview.png";

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='logo'>
        <img src={logo} alt='logo'className='logo_constech'/>
     </div>
     <div className='icons'>
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className='notification'>
            <img src="/notifications.svg" alt="" />
            <span>1</span>
        </div>
        <div className='user'>
            <img src="" alt="" />
            <span>Jane</span>
        </div>
        <img src="/setting.svg" alt="" className='icon' />
     </div>
    </div>
  )
}

export default Navbar
