import { TextField, Box } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function Step1() {
  const { register, watch, formState: { errors } } = useFormContext();

  const password = watch("password");

  const strength =
    password.length < 6
      ? "słabe"
      : /[A-Z]/.test(password) && /[0-9]/.test(password)
      ? "silne"
      : "średnie";

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField label="Imię" {...register("firstName")} error={!!errors.firstName} />
      <TextField label="Nazwisko" {...register("lastName")} />
      <TextField label="Email" {...register("email")} />
      <TextField type="password" label="Hasło" {...register("password")} />
      <div>Siła hasła: {strength}</div>
      <TextField type="password" label="Powtórz hasło" {...register("confirmPassword")} />
    </Box>
  );
}