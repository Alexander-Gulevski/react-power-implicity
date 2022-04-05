import './styles.scss';

const Nav = () => {
    return (
        <nav className='nav'>
            <a href="/" className='nav__logo'><img src='../../assets/Apple.png' alt='apple' /></a>
            <ul className='nav__list'>
                <li className='nav__item'><a href="/"className='nav__item--link'>Features</a></li>
                <li className='nav__item'><a href="/"className='nav__item--link'>Partners</a></li>
                <li className='nav__item'><a href="/"className='nav__item--link'>Stories</a></li>
            </ul>
            <button className='nav__btn'>Download for free</button>
        </nav>
    );
};

export default Nav;