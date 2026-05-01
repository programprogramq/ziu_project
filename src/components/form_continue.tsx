import {
  Box,
  Button,
  Checkbox,
  Typography,
  FormControlLabel
} from "@mui/material";
import {
  useFormContext,
  useFieldArray,
  Controller
} from "react-hook-form";

export default function Step2() {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "categories"
  });

  return (
    <Box
      component="section"
      aria-labelledby="step2-title"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Typography id="step2-title" variant="h6">
        Preferencje
      </Typography>

      {/* Kategorie */}
      <Box component="section" aria-labelledby="categories-title">
        <Typography id="categories-title">
          Kategorie
        </Typography>

        <Button
          onClick={() => append("Nowa")}
          aria-label="Dodaj nową kategorię"
        >
          Dodaj kategorię
        </Button>

        <Box component="ul">
          {fields.map((f, i) => (
            <Box component="li" key={f.id}>
              <span>{f.value}</span>

              <Button
                onClick={() => remove(i)}
                aria-label={`Usuń kategorię ${f.value}`}
              >
                Usuń
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Powiadomienia */}
      <Box component="fieldset">
        <legend>Powiadomienia</legend>

        <Controller
          name="notifications.email"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={field.value}
                />
              }
              label="Powiadomienia email"
            />
          )}
        />

        <Controller
          name="notifications.push"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={field.value}
                />
              }
              label="Powiadomienia push"
            />
          )}
        />
      </Box>
      <Box component="fieldset">
        <legend>Marketing</legend>

        <Controller
          name="newsletter"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={field.value}
                />
              }
              label="Zapisz do newslettera"
            />
          )}
        />
      </Box>

      <Box
        role="status"
        aria-live="polite"
        sx={{ position: "absolute", left: "-9999px" }}
      >
        {`Liczba kategorii: ${fields.length}`}
      </Box>
    </Box>
  );
}