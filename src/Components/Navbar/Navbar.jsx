
import { useState } from 'react'
import logo from '../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'
import navbarStyle from '../Navbar/Navbar.module.css'

export default function Navbar() {
  const [lang, setLang] = useState("en");
    function closeNav() {
    let nav = document.querySelector(".navbar-collapse");
    if (nav) {
      nav.classList.remove("show");
    }
  }


  const handleLangChange = (value) => {
    setLang(value);
  };

  return (
    <> 
    {/*  position-fixed w-100 z-3 */}
    <nav className={`navbar navbar-expand-lg ${navbarStyle.navColor}`}>
      <div className="container-fluid">

        <Link onClick={closeNav}  className="navbar-brand order-md-2 order-2 text-lg-start text-end m-0" to="/">
          <img className="w-50" src={logo} alt="logo" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars text-white"></i>
        </button>

        <div className=" order-md-2 order-3 collapse navbar-collapse justify-content-between align-items-center" id="navbarSupportedContent">
        
          <ul className="navbar-nav d-flex flex-row align-items-center justify-content-center gap-2 pe-1">
            
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-white" role="button"data-bs-toggle="dropdown"aria-expanded="false">
                {lang === "en" ? "EN" : "AR"}
                </Link>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" onClick={() => handleLangChange("ar")}> 🇪🇬 العربية</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => handleLangChange("en")}> 🇬🇧 English</button>
                </li>
              </ul>
            </li>

            <li>
              <Link to='' className="text-white fa-regular fa-user"></Link>
            </li>
            <li>
              <Link to='' className="text-white fa-regular fa-bookmark"></Link>
            </li>
            <li>
              <Link to='/Cart' onClick={closeNav} className="text-white fa-solid fa-cart-shopping"></Link>
            </li>

          </ul>

          <form className="d-flex justify-content-center" role="search">
            <div className="input-group d-flex justify-content-center">
              <button className={`btn ${navbarStyle.colorOrange}`}type="button">
                <i className="fas fa-search text-white"></i>
              </button>
              <input type="search" className={`form-control ${navbarStyle.maxw}`} placeholder="Search" aria-label="Search"/>
            </div>
          </form>

          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item m-auto">
              <NavLink onClick={closeNav} className="nav-link active text-white" aria-current="page" to="">المراجعات</NavLink>
            </li>
            <li className="nav-item m-auto">
              <NavLink onClick={closeNav} className={`nav-link text-white ps-2 ${navbarStyle.lineLink}`} to="">المذكرات</NavLink>
            </li>
            <li className="nav-item m-auto">
              <NavLink onClick={closeNav} className={`nav-link text-white ps-2 ${navbarStyle.lineLink}`} to="">المنتجات الجديدة</NavLink>
            </li>
            <li className="nav-item m-auto">
              <NavLink onClick={closeNav} className={`nav-link text-white ps-2 ${navbarStyle.lineLink}`} to="">جميع الكتب</NavLink>
            </li>
            <li className="nav-item m-auto">
              <NavLink onClick={closeNav} className={`nav-link text-white ps-2 ${navbarStyle.lineLink}`} to="">الرئيسية</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  )
}

