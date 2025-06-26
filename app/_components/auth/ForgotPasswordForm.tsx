"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "../InputField";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/Loader";

type ForgotPasswordInputs = {
  email: string;
};

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordInputs>();

  const onSubmit: SubmitHandler<ForgotPasswordInputs> = (data) => {
    console.log("Submitted email:", data.email);
  };

  return (
    <form
      className="bg-gradient-to-b from-[rgba(153,153,153,0.56)] to-[rgba(51,51,51,0.37)] p-8 rounded-3xl min-w-[430px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6 flex justify-center">
        <div className="w-24 h-12 flex items-center justify-center rounded">
          <span>Logo</span>
        </div>
      </div>

      <InputField
        label="Email"
        type="email"
        id="email"
        placeholder="Enter your email address"
        register={register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
          },
        })}
        error={errors.email}
      />

      <Button
        type="submit"
        size={"lg"}
        disabled={isSubmitting}
        variant="secondary"
        className="w-[60%] mx-auto block text-white py-3 rounded-xl transition duration-300 my-7"
      >
        {isSubmitting ? <Loader /> : "Submit"}
      </Button>
    </form>
  );
}
