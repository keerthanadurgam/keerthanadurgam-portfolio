import * as React from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function ContactSection() {
  const theme = useTheme();
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState({ name: false, email: false, message: false });
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const validate = () => {
    const newErrors = {
      name: form.name.trim() === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
      message: form.message.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSend = async () => {
    if (!validate()) return;

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "Keerthanadurgamm@gmail.com",
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const fieldStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 1,
      fontSize: "0.9rem",
      backgroundColor: theme.palette.background.default,
      "& fieldset": {
        borderColor: theme.palette.primary.main,
        borderWidth: "1.5px",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.dark,
        borderWidth: "2px",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
        borderWidth: "2px",
      },
    },
    "& .MuiInputLabel-root": {
      fontSize: "0.9rem",
      color: theme.palette.secondary.main,
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& .MuiInputBase-input": {
      color: theme.palette.text.primary,
    },
  };

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 1, fontSize: { xs: "2rem", md: "2.8rem" } }}>
          Contact Me
        </Typography>
        <Typography variant="body2" sx={{ mb: 6, fontSize: "1rem" }}>
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </Typography>

        <Grid container spacing={6} alignItems="flex-start">

          <Grid size={{ xs: 12, sm: 5 }}>
            <Typography variant="body1" lineHeight={1.9} fontSize="1.05rem" mb={2}>
              Want to collborate with me🤩, or just a
              good conversation about tech 🦾. Fill in the form and I'll get back
              to you as soon as I can.
            </Typography>
            <Typography variant="body1" lineHeight={1.9} fontSize="1.05rem">
              Prefer email directly?{" "}
              <Box
                component="a"
                href="mailto:Keerthanadurgamm@gmail.com"
                sx={{ color: "primary.main", textDecoration: "none", fontWeight: 600 }}
              >
                Keerthanadurgamm@gmail.com
              </Box>
            </Typography>
          </Grid>


          <Grid size={{ xs: 12, sm: 7 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name ? "Name is required" : ""}
                fullWidth
                size="small"
                variant="outlined"
                sx={fieldStyle}
              />
              <TextField
                label="Your Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email ? "Enter a valid email" : ""}
                fullWidth
                size="small"
                variant="outlined"
                sx={fieldStyle}
              />
              <TextField
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                error={errors.message}
                helperText={errors.message ? "Message is required" : ""}
                fullWidth
                size="small"
                multiline
                rows={5}
                variant="outlined"
                sx={fieldStyle}
              />
              <Box>
                <Button
                  onClick={handleSend}
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  disabled={status === "sending"}
                  sx={{ py: 1.2, px: 4, fontSize: "0.95rem" }}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={status === "success"}
        autoHideDuration={4000}
        onClose={() => setStatus("idle")}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setStatus("idle")} sx={{ width: "100%" }}>
          Message sent! I'll get back to you soon.
        </Alert>
      </Snackbar>
   

      <Snackbar
        open={status === "error"}
        autoHideDuration={4000}
        onClose={() => setStatus("idle")}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error" onClose={() => setStatus("idle")} sx={{ width: "100%" }}>
          Something went wrong. Please try again.
        </Alert>
      </Snackbar>
    </Box>
  );
}


export default ContactSection;
