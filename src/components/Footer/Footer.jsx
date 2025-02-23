import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import LanguageContext from "../../context/LanguageContext";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const [theme] = useContext(ThemeContext);
  const [lang] = useContext(LanguageContext);
  const social = [
    { icon: <FacebookIcon /> },
    { icon: <TwitterIcon /> },
    { icon: <InstagramIcon /> },
    { icon: <LinkedInIcon /> },
  ];
  return (
    <footer
      style={{
        background: theme === "light" ? "#eee" : "#212529",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px 0",
        textAlign: "center",
        marginTop: "20px",
      }}>
      <Box className="container">
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          {lang === "ENG" ? "Follow Us" : "تابعنا"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "10px",
          }}>
          {social.map((page) => (
            <Link
              key={page}
              to="#"
              style={{ color: theme === "light" ? "#000" : "#fff" }}>
              {page.icon}
            </Link>
          ))}
        </Box>

        <Typography variant="body2">
          {lang === "ENG"
            ? "© 2025 All Rights Reserved."
            : "© 2025 جميع الحقوق محفوظة."}
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
