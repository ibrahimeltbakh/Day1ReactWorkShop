import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Nav />
        <div
          style={{
            minHeight: "100vh",
          }}>
          <Outlet />
        </div>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
export default App;
