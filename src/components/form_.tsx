import { Box } from "@mui/material";

export default function Stepper({ step }: { step: number }) {
  return <Box>Krok {step} / 3</Box>;
}