import './styles.scss';

const Header = () => {
    return (
        <header>
            <div className='slider'>
                <h1 className='slider__title'>The Power of Simplicity</h1>
                <p className='slider__text'>Instead of spending time searching for the right app, our AI will bring the right app to you.</p>
                <a href="/" className='slider__link'>Learn</a>
                <ul className='slider__controls'>
                    <li className='slider__dot'></li>
                    <li className='slider__dot'></li>
                    <li className='slider__dot slider__dot--active'></li>
                    <li className='slider__dot'></li>
                    <li className='slider__dot'></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;