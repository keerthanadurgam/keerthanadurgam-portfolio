import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title: "Quick chat - real time chat application",
    description:
      "Built a simple and secure chat application that allows users to connect instantly using just their phone number. Designed with a focus on speed, ease of use, and privacy.",
    tags: ["ReactNative", "Node.js", "PostgreSQL", "Socket.io", "Firebase"],
    github: "https://github.com/NikithaMedikonda/quickchat-frontend",
    emoji: "💬",
  },
  {
    title: "Bradman foundation virtual museum",
    description:
      "Built a mobile-first web application that brings The Bradman Museum—Australia’s largest dedicated cricket museum—to the digital world. It celebrates the life and legacy of Sir Donald Bradman, Australia’s greatest cricketing icon, as well as the rich history and spirit of the game itself. The application features multiple collections of cricket artefacts, each presented with detailed descriptions, images, and videos, while offering full support for keyboard navigation, accessibility standards, and responsive layouts across all screen sizes.",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL (Drizzle ORM)", "AWS RDS", "kinde for authentication", "AWS S3, cloudinary, CloudFront(CDN)"],
    emoji:"🏏",
  },
  {
    title: "Sky ready - flight booking web application",
    description:
      "A flgiht booking web application, which allows users to select the flight seats and filter the based on class, and calculate the charge of seats based on availability and class(economic, first class, second class)",
    tags: ["React", "Ruby on rails", "PostgreSQL"],
    github: "https://github.com/anjanibarlapati/skyready-frontend",
    emoji: "🛫",
  },
  {
    title: "Pet Buddy - mobile application for pet management",
    description:
      "A mobile app built for the management of pets, which allows to create and manage profiles for pets, and easily store the pets data at one place",
    tags: ["React Native", "CSS", "PostgreSQL"],
    github: "https://github.com/durgamkeerthana/pet-buddy-mobile-application",

    emoji: "🐈",
  },
];

export function Projects() {
  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, background: "#f0f9ff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ mb: 1, color: "#000", fontSize: { xs: "2rem", md: "2.8rem" } }}
        >
          Projects
        </Typography>
        <Typography variant="body1" sx={{ color: "#0369a1", mb: 6 }}>
          Things I've built — from idea to deployment.
        </Typography>

        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid size ={{xs:12 ,sm:6 ,md:4}} key={p.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 16px 48px rgba(14,165,233,0.18)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography fontSize="2.5rem" mb={1.5}>
                    {p.emoji}
                  </Typography>
                  <Typography variant="h5" fontWeight={700} color="#000" mb={1}>
                    {p.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#0369a1"
                    mb={2}
                    lineHeight={1.7}
                  >
                    {p.description}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={0.8} mb={3}>
                    {p.tags.map((t) => (
                      <Chip key={t} label={t} size="small" />
                    ))}
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon fontSize="small" />}
                      href={p.github}
                      sx={{
                        color: "#000",
                        fontWeight: 600,
                        "&:hover": { color: "#0ea5e9" },
                      }}
                    >
                      Code
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
