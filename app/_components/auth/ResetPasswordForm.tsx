"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useSearchParams } from "next/navigation"; // or use params from app router if needed
import InputField from "../InputField";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/Loader";

type ResetPasswordInputs = {
  newPassword: string;
  confirmPassword: string;
};

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordInputs>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const searchParams = useSearchParams();
  const resetToken = searchParams.get("token");

  const onSubmit: SubmitHandler<ResetPasswordInputs> = (data) => {
    console.log("Reset Password Data:", {
      token: resetToken,
      newPassword: data.newPassword,
    });
    reset();
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

      <div className="space-y-5">
        <InputField
          label="New Password"
          type="password"
          id="newPassword"
          placeholder="Enter New Password"
          register={register("newPassword", {
            required: "New password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.newPassword}
        />
        <InputField
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          placeholder="Confirm your Password"
          register={register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("newPassword") || "Passwords do not match",
          })}
          error={errors.confirmPassword}
        />
      </div>

      <Button
        type="submit"
        size={"lg"}
        variant="secondary"
        className="w-[60%] mx-auto block text-white py-3 rounded-xl transition duration-300 my-7"
      >
        {isSubmitting ? <Loader /> : "Submit"}
      </Button>
    </form>
  );
}
