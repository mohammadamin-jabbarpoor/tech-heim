"use client";

import { authClient } from "@/lib/auth/auth-client";
import { LoginFormValues, loginSchema } from "@/lib/validation/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeSlash, Facebook, Google, Key, Sms, User } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type LoginFormProps = {
  onClose: () => void;
  onSwitchToRegister: () => void;
  onClick: () => void;
};

function MobileLoginForm({
  onClose,
  onSwitchToRegister,
  onClick,
}: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);

    try {
      const { data: result, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (error) {
        toast.error(error.message || "Invalid email or password");
        return;
      }

      toast.success("You have been logged in successfully");

      onClose();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 mt-10">
      <p className="font-medium text-xl">Craete your account</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <div className="space-y-1">
          <div className="relative">
            <input
              {...register("email")}
              placeholder=" "
              className={`peer w-full h-12 rounded-lg pl-11 px-3 outline-none text-gray-400 transition-colors duration-200 ${
                errors.email
                  ? "border border-error focus:border-error focus:text-error caret-error"
                  : "border border-gray-400 focus:border-primary focus:text-primary caret-primary"
              }`}
            />

            <div
              className={`absolute top-3 left-3 ${
                errors.email
                  ? "text-error peer-focus:text-error"
                  : "text-gray-400 peer-focus:text-primary"
              }`}
            >
              <Sms variant="Outline" size={24} color="currentColor" />
            </div>

            <label
              htmlFor="email"
              className={`
                absolute left-10 top-1/2
                -translate-y-1/2
                bg-white px-1
                text-sm
                pointer-events-none
                transition-all duration-200 ease-in-out
  
                peer-focus:top-0
                peer-focus:left-5
                peer-focus:-translate-y-1/2
                peer-focus:text-xs
  
                peer-not-placeholder-shown:top-0
                peer-not-placeholder-shown:left-5
                peer-not-placeholder-shown:-translate-y-1/2
                peer-not-placeholder-shown:text-xs
  
                ${
                  errors.email
                    ? "text-error peer-focus:text-error"
                    : "text-gray-600 peer-focus:text-primary"
                }`}
            >
              E-mail
            </label>
          </div>
          {errors.email && (
            <p className="text-xs text-error">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder=" "
              className={`peer w-full h-12 rounded-lg pl-11 px-3 outline-none text-gray-600 transition-colors duration-200 ${
                errors.password
                  ? "border border-error focus:border-error focus:text-error caret-error"
                  : "border border-gray-400 focus:border-primary focus:text-primary caret-primary"
              }`}
            />

            <div
              className={`absolute top-3 left-3 ${
                errors.password
                  ? "text-error peer-focus:text-error"
                  : "text-gray-400 peer-focus:text-primary"
              }`}
            >
              <Key variant="Outline" size={24} color="currentColor" />
            </div>

            <label
              htmlFor="password"
              className={`
                absolute left-10 top-1/2
                -translate-y-1/2
                bg-white px-1
                text-sm
                pointer-events-none
                transition-all duration-200 ease-in-out
  
                peer-focus:top-0
                peer-focus:left-5
                peer-focus:-translate-y-1/2
                peer-focus:text-xs
  
                peer-not-placeholder-shown:top-0
                peer-not-placeholder-shown:left-5
                peer-not-placeholder-shown:-translate-y-1/2
                peer-not-placeholder-shown:text-xs
  
                ${
                  errors.password
                    ? "text-error peer-focus:text-error"
                    : "text-gray-600 peer-focus:text-primary"
                }`}
            >
              Password
            </label>

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className={`absolute top-3 right-3 ${
                errors.password
                  ? "text-error peer-focus:text-error"
                  : "text-gray-400 peer-focus:text-primary"
              }`}
            >
              {showPassword ? (
                <Eye variant="Outline" size={24} color="currentColor" />
              ) : (
                <EyeSlash variant="Outline" size={24} color="currentColor" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-error">{errors.password.message}</p>
          )}
        </div>

        <div>
          <p className="flex justify-end font-light text-xs text-primary">
            Forgot Pasword ?
          </p>
          <div className="flex items-center justify-start gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <p className="font-light text-xs text-gray-600">
              Keep me logged in{" "}
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center h-10 bg-primary text-white text-sm disabled:bg-primary-50 rounded-lg"
        >
          {isLoading ? "Logging in..." : "Log in"}
        </button>
      </form>
      <div className="w-full flex items-center gap-2">
        <div className="h-[0.5px] flex-1 bg-gray-400" />
        <p className="font-light text-sm text-gray-900">Or Log In with</p>
        <div className="h-[0.5px] flex-1 bg-gray-400" />
      </div>
      <div className="w-full flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onClick}
          className="w-1/2 flex items-center justify-center py-2 border-2 border-primary text-primary text-sm rounded-lg"
        >
          <div className="flex items-center gap-2">
            <Google variant="Bold" size={24} color="currentColor" />
            <p>Google</p>
          </div>
        </button>
        <button
          type="button"
          className="w-1/2 flex items-center justify-center py-2 border-2 border-primary text-primary text-sm rounded-lg"
        >
          <div className="flex items-center gap-2">
            <Facebook variant="Bold" size={24} color="currentColor" />
            <p>Facebook</p>
          </div>
        </button>
      </div>
      <div className="flex items-center gap-3">
        <p className="font-light text-gray-600">Don't have an account ?</p>
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="font-normal text-primary cursor-pointer"
        >
          sign up
        </button>
      </div>
    </div>
  );
}

export default MobileLoginForm;
