import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "Projects", "Skills", "Certifications", "About"];

export function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (page: string) => {
    handleCloseNavMenu();
    const id = page.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              letterSpacing: ".15rem",
              color: "#000",
              textDecoration: "none",
              fontSize: "1.4rem",
            }}
          >
            Keerthana Durgam
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#000", p: 1 }}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  minWidth: 180,
                  mt: 1,
                  borderRadius: 2,
                  border: "1px solid #bae6fd",
                  boxShadow: "0 8px 32px rgba(14,165,233,0.12)",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => scrollToSection(page)}
                  sx={{ py: 1.5, px: 3 }}
                >
                  <Typography
                    sx={{ fontWeight: 600, color: "#000", fontSize: "0.95rem" }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              letterSpacing: ".15rem",
              color: "#000",
              textDecoration: "none",
              fontSize: "1.25rem",
            }}
          >
            Keerthana Durgam
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 0.5 }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => scrollToSection(page)}
                sx={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  px: 2,
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "#bae6fd",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="contained"
                sx={{
                  color: "text.primary",
                  borderColor: "primary",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  px: 1.5,
                  py: 0.8,
                  textTransform: "none",
                  letterSpacing: "0.03em",
                  "&:hover": {
                    backgroundColor: "#bae6fd",
                    borderColor: "primary",
                  },
                }}
              >
                Let's Talk
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
