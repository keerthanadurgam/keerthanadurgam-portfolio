import * as React from "react";
import { Typography, Box } from "@mui/material";

const words = [
  "Software Engineer",
  "Curious debugger",
  "Full stack developer",
];

export function Description() {
  const [displayText, setDisplayText] = React.useState("");
  const [wordIndex, setWordIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    const current = words[wordIndex];

    if (!isDeleting) {
      if (charIndex < current.length) {
        const timeout = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsDeleting(true), 1400);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setOpacity(0);
        const timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
          setOpacity(1);
        }, 400);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography
        variant="h5"
        sx={{ color: "text.secondary", fontWeight: 400 }}
      >
       A
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
          opacity,
          transition: "opacity 0.3s ease",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {displayText}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: "2px",
            height: "1.1em",
            bgcolor: "#0ea5e9",
            ml: "2px",
            verticalAlign: "middle",
            borderRadius: "1px",
            animation: "blink 0.7s step-end infinite",
            "@keyframes blink": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0 },
            },
          }}
        />
      </Typography>
    </Box>
  );
}
