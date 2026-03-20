import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

export function About() {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, background: "#f0f9ff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ mb: 1, color: "#000", fontSize: { xs: "2rem", md: "2.8rem" } }}
        >
          About Me
        </Typography>
        <Typography variant="body1" sx={{ color: "#0369a1", mb: 6 }}>
          A little more about who I am beyond the code.
        </Typography>

        <Grid container spacing={6} alignItems="flex-start">
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={3}>
              <Typography
                variant="body1"
                color="#000"
                lineHeight={1.9}
                fontSize="1.05rem"
              >
                I'm Keerthana — I am a passionate Software Engineer who enjoys
                building software products with a strong focus on quality, clean
                code, and user experience. Skilled in both Frontend and Backend
                development.
              </Typography>
              <Typography
                variant="body1"
                color="#000"
                lineHeight={1.9}
                fontSize="1.05rem"
              >
                My journey started in Electrical Engineering, where I learned to
                think systematically and be relentlessly curious about why
                things work the way they do.
              </Typography>
              <Typography
                variant="body1"
                color="#000"
                lineHeight={1.9}
                fontSize="1.05rem"
              >
                That curiosity naturally led me to software, where debugging
                isn't just fixing bugs — it's understanding the entire system
                well enough to make it better. I enjoy working across the stack
                and I'm always learning something new.
              </Typography>
              <Typography
                variant="body1"
                color="#000"
                lineHeight={1.9}
                fontSize="1.05rem"
              >
                Beyond technology, I also has a deep love for music, which fuels
                my creativity and focus.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={2}>
              {[
                {
                  icon: <SchoolIcon sx={{ color: "#0ea5e9" }} />,
                  label: "Education",
                  value: "B.Tech — Electrical Engineering",
                },
                {
                  icon: <WorkIcon sx={{ color: "#0ea5e9" }} />,
                  label: "Experience",
                  value: "2+ years in full-stack development",
                },
              ].map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 2.5,
                    bgcolor: "#e0f2fe",
                    borderRadius: 3,
                    border: "1px solid #bae6fd",
                  }}
                >
                  <Box mt={0.25}>{item.icon}</Box>
                  <Box>
                    <Typography
                      fontWeight={700}
                      color="#000"
                      fontSize="0.85rem"
                      mb={0.25}
                    >
                      {item.label}
                    </Typography>
                    <Typography color="#0369a1" fontSize="0.95rem">
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
