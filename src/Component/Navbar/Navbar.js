import './Navbar.css';
import whitemoonicon from '../../Assets/white-moon-icon.svg';
import whitesunicon from '../../Assets/white-sun-icon.svg';

function Navbar(){
    return(
        <div class="navbar-body">
            <ul class="navbar-options">
                <li class="navbar-options-li-text">FR</li>
                <li class="navbar-options-li-text">EN</li>
                <li class="navbar-options-li-icon"><img src={whitemoonicon} alt="DarkModeIcon" width="20" height="20"/></li>
                <li class="navbar-options-li-icon"><img src={whitesunicon} alt="LightModeIcon" width="20" height="20"/></li>
            </ul>
        </div>
    );
}

export default Navbar;