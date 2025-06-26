"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import InputField from "../InputField";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/Loader";

type LoginInputs = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    defaultValues: {
      username: "Cordia_Feest",
      password: "1234",
    },
  });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    setIsLoading(true);
    console.log("Login data:", data);
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
          label="UserName"
          type="text"
          placeholder="Enter your UserName"
          register={register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters long",
            },
          })}
          error={errors.username}
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters long",
            },
          })}
          error={errors.password}
        />
      </div>

      <div className="flex justify-between items-center text-[#C8C8C8] mt-4 text-xs">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2 accent-input"
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <Link href="/forgot-password" className="underline">
          Forgot Password?
        </Link>
      </div>

      <Button
        type="submit"
        size={"lg"}
        variant="secondary"
        className="w-[60%] mx-auto flex items-center justify-center text-white py-3 rounded-xl transition duration-300 my-7"
      >
        {isLoading ? <Loader /> : "Login"}
      </Button>

      <div className="text-center text-xs">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline">
          SignUp
        </Link>
      </div>
    </form>
  );
}
