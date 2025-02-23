import { Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import { Box } from "@mui/material";

const Nav = () => {
  const [darkLight, setDarkLight] = useState(<DarkModeIcon />);
  const [EngAr, setEngAr] = useState("ENG");
  const [theme, setTheme] = useContext(ThemeContext);
  const [lang, setLang] = useContext(LanguageContext);
  const toggleTheme = () => {
    const newTheme = theme == "light" ? "dark" : "light";
    setTheme(newTheme);
    setDarkLight(newTheme == "light" ? <DarkModeIcon /> : <LightModeIcon />);
  };
  const toggleLang = () => {
    const newLang = lang == "ENG" ? "ع" : "ENG";
    setLang(newLang);
    setEngAr(newLang == "ENG" ? "ع" : "ENG");
  };
  useEffect(() => {
    document.body.className = `${theme} ${lang}`;
  }, [theme, lang]);
  let pages = [
    { pageName: lang == "ENG" ? "Home" : "الرئيسيه", pagePath: "/" },
    { pageName: lang == "ENG" ? "About Us" : "عنا", pagePath: "about" },
    {
      pageName: lang == "ENG" ? "Contact Us" : "تواصل معنا",
      pagePath: "contact",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          {lang == "ENG" ? "Logo" : "اللوجو"}
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            {pages.map((item) => {
              return (
                <NavLink
                  key={uuidv4()}
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    marginRight: "10px",
                    padding: "5px",
                  }}
                  to={item.pagePath}
                  className={({ isActive }) =>
                    `nav-item default-class another-class ${isActive ? "text-light bg-success" : ""}`
                  }
                  aria-current="page">
                  {item.pageName}
                </NavLink>
              );
            })}
          </ul>
        </div>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            color: "teal",
          }}>
          <Link to={"cart"} style={{ color: "teal" }}>
            <AddShoppingCartOutlinedIcon />
          </Link>
          <IconButton sx={{ color: "teal" }} onClick={toggleTheme}>
            {darkLight}
          </IconButton>
          <IconButton sx={{ color: "teal" }} onClick={toggleLang}>
            {EngAr}
          </IconButton>
        </Box>
      </div>
    </nav>
  );
};

export default Nav;
