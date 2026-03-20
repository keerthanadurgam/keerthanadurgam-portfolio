import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import DescriptionIcon from "@mui/icons-material/Description"; // Uncomment when adding Resume
import { Description } from "./Description";

const getSocialLinks = () => [
  {
    label: "GitHub",
    href: "https://github.com/durgamkeerthana",
    icon: <GitHubIcon fontSize="medium" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/keerthana-durgam-95920a278",
    icon: <LinkedInIcon fontSize="medium" />,
  },
];

export function Header() {
  const theme = useTheme();
  const SOCIAL_LINKS = getSocialLinks();

  return (
    <Box
      id="home"
      sx={{
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.divider} 50%, ${theme.palette.background.default} 100%)`,
        py: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.8rem", md: "4rem", lg: "5rem" },
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                Hi, I'm{" "}
                <Box
                  component="span"
                  sx={{
                    color: "primary.dark",
                    display: "inline-block",
                  }}
                >
                  Keerthana
                </Box>
              </Typography>
              <Description />
              <Typography
                variant="body1"
                sx={{
                  maxWidth: 520,
                  color: "text.secondary",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                }}
              >
                I am a software engineer, enjoys taking on new challenges,
                contributing practical solutions, and continuously improving my
                craft. I bring adaptability and problem-solving skills to
                critical situations and thrives in collaborative team
                environments.
              </Typography>

              <Stack direction="row" spacing={1} pt={1}>
                {SOCIAL_LINKS.map(({ label, href, icon }) => (
                  <Tooltip key={label} title={label} arrow>
                    <IconButton
                      component="a"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      sx={{
                        color: "primary.dark",
                        border: `1.5px solid ${theme.palette.divider}`,
                        borderRadius: "10px",
                        p: 1,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          backgroundColor: "primary.dark",
                          color: "primary.contrastText",
                          borderColor: "primary.dark",
                          transform: "translateY(-2px)",
                          boxShadow: `0 4px 16px ${theme.palette.primary.main}40`,
                        },
                      }}
                    >
                      {icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: { xs: 220, md: 320 },
                height: { xs: 220, md: 320 },
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 24px 80px ${theme.palette.primary.main}4D`,
                border: `4px solid ${theme.palette.background.paper}`,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src="/my-logo.png"
                alt="Keerthana"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
