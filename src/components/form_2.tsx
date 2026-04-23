import { Box, Checkbox, Button } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function Step3({ onSubmit }: { onSubmit: () => void }) {
  const { watch, register } = useFormContext();

  const data = watch();

  return (
    <Box>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <Checkbox {...register("rodo")} />

      <Button onClick={onSubmit}>Zarejestruj się</Button>
    </Box>
  );
}