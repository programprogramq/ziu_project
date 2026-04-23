import React from "react";
import { Button, Box } from "@mui/material";
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
    defaultValues: {
      categories: [],
      notifications: { email: false, push: false }
    }
  });

  const { step, next, back, setStep } = useStep();

  const { trigger, handleSubmit, setError } = methods;

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
      setError("root.serverError", {
        message: "Błąd serwera…"
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <Box p={2}>
        <Stepper step={step} />

        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 onSubmit={handleSubmit(onSubmit)} />}

        <Box mt={2}>
          {step > 1 && <Button onClick={back}>Wstecz</Button>}
          {step < 3 && <Button onClick={nextStep}>Dalej</Button>}
        </Box>
      </Box>
    </FormProvider>
  );
}