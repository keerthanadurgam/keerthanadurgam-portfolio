import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import Certifications from "./components/Certifications";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        <NavBar />
        <Header />
        <Projects />
        <Skills />
        <Certifications/>
        <About />
        <ContactSection/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
