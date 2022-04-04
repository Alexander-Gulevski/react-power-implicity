import './styles.scss';

const Header = () => {
    return (
        <header className='slider'>
            <h1 className='slider__title'>The Power of Simplicity</h1>
            <p className='slider__text'>Instead of spending time searching for the right app, our AI will bring the right app to you.</p>
            <button className='slider__btn'> <a href="/" className='slider__btn__link'> Learn </a></button>
            <div className='slider__controls'>
                <div className='slider__controls__dot'></div>
                <div className='slider__controls__dot'></div>
                <div className='slider__controls__dot slider__controls__dot-active'></div>
                <div className='slider__controls__dot'></div>
                <div className='slider__controls__dot'></div>
            </div>
        </header>
    );
};

export default Header;