import { Box, Typography } from "@mui/material";

export default function Stepper({ step }: { step: number }) {
  const totalSteps = 3;

  return (
    <Box
      component="nav"
      aria-label="Postęp formularza"
      display="flex"
      flexDirection="column"
      gap={1}
    >
      <Typography variant="body1">
        Krok {step} z {totalSteps}
      </Typography>
      <Box
        role="status"
        aria-live="polite"
        sx={{ position: "absolute", left: "-9999px" }}
      >
        {`Aktualny krok: ${step} z ${totalSteps}`}
      </Box>
    </Box>
  );
}