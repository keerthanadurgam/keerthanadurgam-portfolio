import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0ea5e9", 
      light: "#38bdf8", 
      dark: "#0284c7", 
      contrastText: "#000000",
    },
    secondary: {
      main: "#0369a1", 
      contrastText: "#ffffff",
    },
    background: {
      default: "#e0f2fe", 
      paper: "#f0f9ff",   
    },
    text: {
      primary: "#000000",
      secondary: "#0c4a6e", 
    },
    divider: "#bae6fd", 
  },
  typography: {
    fontFamily: "'DM Sans', 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 700,
      color: "#000000",
    },
    h2: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 600,
      color: "#000000",
    },
    h3: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 600,
      color: "#000000",
    },
    h4: { fontWeight: 600, color: "#000000" },
    h5: { fontWeight: 600, color: "#000000" },
    h6: { fontWeight: 600, color: "#000000" },
    body1: { color: "#000000" },
    body2: { color: "#0c4a6e" },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(224, 242, 254, 0.85)", 
          backdropFilter: "blur(12px)",
          boxShadow: "0 1px 0 0 #bae6fd",
          color: "#000000",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          letterSpacing: "0.02em",
        },
        containedPrimary: {
          backgroundColor: "#0ea5e9",
          color: "#000000",
          "&:hover": { backgroundColor: "#0284c7" },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#000000",
          "&:hover": {
            backgroundColor: "#bae6fd",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#f0f9ff",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#f0f9ff",
          border: "1px solid #bae6fd",
          boxShadow: "0 4px 24px rgba(14, 165, 233, 0.08)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#bae6fd",
          color: "#000000",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;