import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";

const skillGroups = [
  {
    category: "Frontend",
    emoji: "🎨",
    skills: ["React", "React Native", "Next.js", "TypeScript", "MUI", "Tailwind CSS"],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    skills: ["Node.js", "Express", "REST APIs", "Ruby on Rails"],
  },
  {
    category: "Databases",
    emoji: "🗄️",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Sequelize"],
  },
  {
    category: "Tools & DevOps",
    emoji: "🛠️",
    skills: ["Git", "GitHub", "Postman","AWS", "Docker", "CI/CD", "Github actions", "jenkins"],
  },
];

export function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #e0f2fe 0%, #bae6fd 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ mb: 1, color: "#000", fontSize: { xs: "2rem", md: "2.8rem" } }}
        >
          Skills
        </Typography>
        <Typography variant="body1" sx={{ color: "#0369a1", mb: 6 }}>
          Technologies I work with day-to-day.
        </Typography>

        <Grid container spacing={3}>
          {skillGroups.map((group) => (
                <Grid size={{ xs: 12, sm: 6 }} key={group.category}>
              <Box
                sx={{
                  bgcolor: "rgba(240,249,255,0.8)",
                  border: "1px solid #bae6fd",
                  borderRadius: 3,
                  p: 3,
                  backdropFilter: "blur(8px)",
                }}
              >
                <Typography variant="h5" fontWeight={700} color="#000" mb={2}>
                  {group.emoji}&nbsp; {group.category}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {group.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        bgcolor: "#0ea5e9",
                        color: "#000",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        "&:hover": { bgcolor: "#0284c7" },
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;
