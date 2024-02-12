import Logo from "../../img/LogoM.png";
import Seacrh from "../search/Seacrch";

export const Header = () => {
    return(
        <header className="row align-cent flex">
            <div className="header__logo">
                <img src={Logo} alt="" />
            </div>
            <ul className="header__list flex align-cent">
                <li className="header__href">Решения</li>
                <li className="header__href">Ресурсы</li>
                <li className="header__href">О нас</li>
                <li className="header__href">Блог</li>
                <li className="header__href">Контакты</li>
            </ul>
            <div className="header__search">
                <Seacrh placeholder={"Найти"}/>          
            </div>
            <div className="header__auth">
                <button>Вход</button>
            </div>
        </header>
    )
}