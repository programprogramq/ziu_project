import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Step1 from "../components/form";
import Step2 from "../components/form_continue";
import Step3 from "../components/form_2";
import Stepper from "../components/form_";

import { fullSchema } from "../schemas/formSchema";
import useStep from "../hooks/useStep";
import type { FormData } from "../types/form";

export default function App() {
  const methods = useForm<FormData>({
    resolver: zodResolver(fullSchema),
    mode: "onTouched",
    defaultValues: {
      categories: [],
      notifications: { email: false, push: false }
    }
  });

  const { step, next, back, setStep } = useStep();
  const { trigger, handleSubmit, setError, formState } = methods;

  const nextStep = async () => {
    let valid = false;

    if (step === 1) {
      valid = await trigger([
        "firstName",
        "lastName",
        "email",
        "password",
        "confirmPassword"
      ]);
    }

    if (step === 2) {
      valid = await trigger(["categories"]);
    }

    if (valid) next();
  };

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.status === 409) {
        setError("email", { message: "Email zajęty" });
        setStep(1);
        return;
      }

      if (!res.ok) throw new Error();

      alert("Sukces!");
    } catch {
      setError("root", {
        message: "Błąd serwera…"
      });
    }
  };

  const serverError = formState.errors.root?.message;

  return (
    <FormProvider {...methods}>
      <Box
        component="main"
        aria-labelledby="form-title"
        p={2}
      >
        <Typography id="form-title" variant="h5">
          Rejestracja użytkownika
        </Typography>

        <Stepper step={step} />

        <Box
          component="section"
          aria-live="polite"
          aria-busy={formState.isSubmitting}
        >
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 onSubmit={handleSubmit(onSubmit)} />}
        </Box>

        {serverError && (
          <Box
            role="alert"
            aria-live="assertive"
            sx={{ mt: 2 }}
          >
            {serverError}
          </Box>
        )}
        <Box
          component="nav"
          aria-label="Nawigacja formularza"
          mt={2}
        >
          {step > 1 && (
            <Button
              onClick={back}
              aria-label="Wróć do poprzedniego kroku"
            >
              Wstecz
            </Button>
          )}

          {step < 3 && (
            <Button
              onClick={nextStep}
              aria-label="Przejdź do następnego kroku"
            >
              Dalej
            </Button>
          )}

          {step === 3 && (
            <Button
              onClick={handleSubmit(onSubmit)}
              aria-label="Wyślij formularz rejestracji"
            >
              Zarejestruj się
            </Button>
          )}
        </Box>

        <Box
          role="status"
          aria-live="polite"
          sx={{ position: "absolute", left: "-9999px" }}
        >
          {formState.isSubmitting ? "Wysyłanie formularza..." : ""}
        </Box>
      </Box>
    </FormProvider>
  );
}