import { TextField, Box, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function Step1() {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext();

  const password = watch("password") || "";

  const strength =
    password.length < 6
      ? "słabe"
      : /[A-Z]/.test(password) && /[0-9]/.test(password)
      ? "silne"
      : "średnie";

  return (
    <Box
      component="section"
      aria-labelledby="step1-title"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Typography id="step1-title" variant="h6">
        Dane użytkownika
      </Typography>

      <TextField
        label="Imię"
        {...register("firstName")}
        error={!!errors.firstName}
        helperText={errors.firstName?.message as string}
        inputProps={{
          "aria-describedby": errors.firstName ? "firstName-error" : undefined
        }}
        FormHelperTextProps={{ id: "firstName-error" }}
        autoComplete="given-name"
        required
      />

      <TextField
        label="Nazwisko"
        {...register("lastName")}
        error={!!errors.lastName}
        helperText={errors.lastName?.message as string}
        inputProps={{
          "aria-describedby": errors.lastName ? "lastName-error" : undefined
        }}
        FormHelperTextProps={{ id: "lastName-error" }}
        autoComplete="family-name"
        required
      />

      <TextField
        label="Email"
        type="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message as string}
        inputProps={{
          "aria-describedby": errors.email ? "email-error" : undefined
        }}
        FormHelperTextProps={{ id: "email-error" }}
        autoComplete="email"
        required
      />

      <TextField
        type="password"
        label="Hasło"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message as string}
        inputProps={{
          "aria-describedby": "password-hint password-error"
        }}
        FormHelperTextProps={{ id: "password-error" }}
        autoComplete="new-password"
        required
      />
      <Typography
        id="password-hint"
        aria-live="polite"
        variant="body2"
      >
        Siła hasła: {strength}
      </Typography>

      <TextField
        type="password"
        label="Powtórz hasło"
        {...register("confirmPassword")}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message as string}
        inputProps={{
          "aria-describedby": errors.confirmPassword
            ? "confirmPassword-error"
            : undefined
        }}
        FormHelperTextProps={{ id: "confirmPassword-error" }}
        autoComplete="new-password"
        required
      />
    </Box>
  );
}