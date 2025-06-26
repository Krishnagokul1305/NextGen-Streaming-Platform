"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import InputField from "../InputField"; // Adjust path if needed
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/Loader";

type RegisterInputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    setIsLoading(true);
    console.log("Register Data:", data);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/movies");
    }, 1000);

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
          id="username"
          label="Username"
          type="text"
          placeholder="Enter your username"
          register={register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          })}
          error={errors.username}
        />
        <InputField
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          error={errors.email}
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.password}
        />
        {/* <InputField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          register={register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          error={errors.confirmPassword}
        /> */}
      </div>

      <Button
        type="submit"
        size={"lg"}
        variant="secondary"
        className="w-[60%] mx-auto block text-white py-3 rounded-xl transition duration-300 my-7"
      >
        {isLoading ? <Loader /> : "Register"}
      </Button>

      <div className="text-center text-xs">
        Already have an account?{" "}
        <Link href="/signin" className="underline">
          Sign In
        </Link>
      </div>
    </form>
  );
}
