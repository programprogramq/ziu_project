import { useState } from "react";

export default function useStep() {
  const [step, setStep] = useState(1);

  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);

  return { step, next, back, setStep };
}