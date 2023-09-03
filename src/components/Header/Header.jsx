import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import logo from '../../images/tmdb-logo.svg';

const Header = () => {
  return (
    <header className={css.head}>
      <div className={css.container}>
        <div className={css.logo}>
          <img src={logo} alt="TMDB logo" className={css.logo_img} />
        </div>
        <nav>
          <ul className={css.nav_list}>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
