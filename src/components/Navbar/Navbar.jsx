import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;