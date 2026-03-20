import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  useTheme,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

 const certifications = [
   {
     name: "AWS AI practitioner 🏆",
     issuedBy: "Amazon Web Services",
     completedMonth: "September 2025",
     link: "https://www.credly.com/badges/e7e76821-71db-4256-92a5-7901050ae651",
   },
   {
     name: "Stripe Certified Associate Developer 🏆",
     issuedBy: "Stripe",
     completedMonth: "April 2025",
     link: "https://stripecertifications.credential.net/41949924-5c29-4219-8026-872ee8ebfe13#acc.07FXDaQ4",
   },
   {
     name: "Stripe Certified Professional Developer 🏆",
     issuedBy: "Stripe",
     completedMonth: "April 2025",
     link: "https://stripecertifications.credential.net/d649812b-6de2-43cd-8d3e-0dee270f6dc0#acc.ow2QjHWY",
   },
   {
     name: "Stripe Certified Billing Developer 🏆",
     issuedBy: "Stripe",
     completedMonth: "April 2025",
     link: "https://stripecertifications.credential.net/0d245c4a-e4f5-4f1b-9d1f-71ee54993480#acc.smwEBv9M",
   },
 ];

export function Certifications() {
  const theme = useTheme();

  return (
    <Box
      id="certifications"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ mb: 1, fontSize: { xs: "2rem", md: "2.8rem" } }}
        >
          Certifications
        </Typography>
        <Typography variant="body2" sx={{ mb: 6, fontSize: "1rem" }}>
          Credentials I've earned along the way.
        </Typography>

        <Grid container spacing={3}>
          {certifications.map((cert) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cert.name}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  bgcolor: "background.default",
                  border: `1.5px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 4px 20px rgba(14, 165, 233, 0.12)`,
                  },
                }}
              >
                {/* Icon + issuer */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <WorkspacePremiumIcon
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: "1.3rem",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, fontSize: "0.8rem" }}
                  >
                    {cert.issuedBy}
                  </Typography>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    color: theme.palette.text.primary,
                    flexGrow: 1,
                  }}
                >
                  {cert.name}
                </Typography>

          
                <Chip
                  label={cert.completedMonth}
                  size="small"
                  sx={{ alignSelf: "flex-start", fontSize: "0.75rem" }}
                />

                <Box
                  component="a"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    "&:hover": { color: theme.palette.primary.dark },
                  }}
                >
                  View Certificate
                  <OpenInNewIcon sx={{ fontSize: "0.9rem" }} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Certifications;
