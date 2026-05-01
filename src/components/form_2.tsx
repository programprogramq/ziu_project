import {
  Box,
  Checkbox,
  Button,
  Typography,
  FormControlLabel,
  FormHelperText
} from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function Step3({ onSubmit }: { onSubmit: () => void }) {
  const {
    watch,
    register,
    formState: { errors }
  } = useFormContext();

  const data = watch();

  return (
    <Box
      component="section"
      aria-labelledby="step3-title"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Typography id="step3-title" variant="h6">
        Podsumowanie
      </Typography>

      <Box
        component="section"
        aria-labelledby="summary-title"
      >
        <Typography id="summary-title">
          Wprowadzone dane
        </Typography>

        <Box
          component="pre"
          aria-label="Podsumowanie danych formularza"
        >
          {JSON.stringify(data, null, 2)}
        </Box>
      </Box>

      <Box component="fieldset">
        <legend>Zgody</legend>

        <FormControlLabel
          control={
            <Checkbox
              {...register("rodo", { required: "Wymagana zgoda" })}
            />
          }
          label="Wyrażam zgodę na przetwarzanie danych osobowych"
        />

        {errors.rodo && (
          <FormHelperText error id="rodo-error">
            {errors.rodo.message as string}
          </FormHelperText>
        )}
      </Box>

      <Button
        variant="contained"
        onClick={onSubmit}
        aria-describedby={errors.rodo ? "rodo-error" : undefined}
      >
        Zarejestruj się
      </Button>

      <Box
        role="alert"
        aria-live="assertive"
        sx={{ position: "absolute", left: "-9999px" }}
      >
        {errors.rodo ? errors.rodo.message : ""}
      </Box>
    </Box>
  );
}