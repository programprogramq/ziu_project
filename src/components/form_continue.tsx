import { Box, Button, Checkbox } from "@mui/material";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";

export default function Step2() {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "categories"
  });

  return (
    <Box>
      <Button onClick={() => append("Nowa")}>Dodaj kategorię</Button>

      {fields.map((f, i) => (
        <Box key={f.id}>
          {f.value}
          <Button onClick={() => remove(i)}>Usuń</Button>
        </Box>
      ))}

      <Controller
        name="notifications.email"
        control={control}
        render={({ field }) => (
          <Checkbox {...field} checked={field.value} aria-label="email notifications" />
        )}
      />

      <Controller
        name="notifications.push"
        control={control}
        render={({ field }) => (
          <Checkbox {...field} checked={field.value} />
        )}
      />

      <Controller
        name="newsletter"
        control={control}
        render={({ field }) => (
          <Checkbox {...field} checked={field.value} />
        )}
      />
    </Box>
  );
}