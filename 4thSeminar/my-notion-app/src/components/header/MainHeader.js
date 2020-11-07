import './MainHeader.scss'
import Button from '../button/Button'
import MenuIcon from '../../assets/icons/mdi_dehaze.svg';

function MainHeader ({ match, history, location }) {
    return(
        <header className="main-header">
            <img className="main-header__icon" alt="icon" src={MenuIcon}/>
            <nav className="main-header__nav">
                <Button text="[ON SOPT] Web Part" onClickFunc={() => history.push('/')}></Button>
                <span> / </span>
                <Button text="파트원소개" onClickFunc={() => history.push('/members')}></Button>
            </nav>
            <div className="empty"></div>
            <div className="main-header__nav">
                <div className="button">Share</div>
                <div className="button">Favorite</div>
                <div className="button">...</div>
            </div>
        </header>
    );
}

export default MainHeader;