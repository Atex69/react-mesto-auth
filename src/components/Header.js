import headerLogo from "../images/mestoLogo.svg";
function Header() {
    return (
<header className="header">
    <img
        alt="логотип"
        className="header__logo"
        src={headerLogo}
    />
</header>
    );
}

export default Header;