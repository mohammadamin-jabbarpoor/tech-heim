"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeSlash, Key, Sms, User } from "iconsax-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  RegisterFormValues,
  registerSchema,
} from "@/src/lib/validation/register-schema";
import { authClient } from "@/src/lib/auth/auth-client";
import AuthSocialButtons from "../AuthSocialButtons";
import AuthFormField from "../AuthFormField";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { syncCartAfterAuth } from "@/src/features/cart/utils/syncCartAfterAuth";
import { useCartStore } from "@/src/stores/cartStore";

type RegisterFormProps = {
  onSwitchToLogin: () => void;
  onClick: () => void;
};

function RegisterForm({ onSwitchToLogin, onClick }: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const items = useCartStore((state) => state.items);
  const setItems = useCartStore((state) => state.setItems);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true);

    try {
      const { data: result, error } = await authClient.signUp.email({
        name: data.fullName,
        email: data.email,
        password: data.password,
      });

      if (error) {
        toast.error(error.message || "Invalid email or password");
        return;
      }

      if (!result?.user) {
        throw new Error("Login failed");
      }

      const guestItems = items.map((item) => ({
        productId: item.id,
        optionId: item.optionId ?? null,
        quantity: item.quantity,
      }));

      const finalCart = await syncCartAfterAuth(guestItems);

      setItems(finalCart ?? []);

      router.push(callbackUrl);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 mt-10">
      <p className="font-medium text-3xl">Create your account</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <AuthFormField
          id="fullName"
          label="Full Name"
          error={errors.fullName?.message}
          icon={<User variant="Outline" size={24} color="currentColor" />}
        >
          <input
            id="fullName"
            {...register("fullName")}
            placeholder=" "
            className={`peer w-full h-12 rounded-lg pl-11 px-3 outline-none text-gray-400 transition-colors duration-200 ${
              errors.fullName
                ? "border border-error focus:border-error focus:text-error caret-error"
                : "border border-gray-400 focus:border-primary focus:text-primary caret-primary"
            }`}
          />
        </AuthFormField>

        <AuthFormField
          id="email"
          label="E-mail"
          error={errors.email?.message}
          icon={<Sms variant="Outline" size={24} color="currentColor" />}
        >
          <input
            id="email"
            {...register("email")}
            placeholder=" "
            className={`peer w-full h-12 rounded-lg pl-11 px-3 outline-none transition-colors duration-200 ${
              errors.email
                ? "border border-error focus:border-error focus:text-error caret-error"
                : "border border-gray-400 focus:border-primary focus:text-primary caret-primary"
            }`}
          />
        </AuthFormField>

        <AuthFormField
          id="password"
          label="Password"
          error={errors.password?.message}
          icon={<Key variant="Outline" size={24} color="currentColor" />}
        >
          <input
            id="password"
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder=" "
            className={`peer w-full h-12 rounded-lg pl-11 px-3 outline-none transition-colors duration-200 ${
              errors.password
                ? "border border-error focus:border-error focus:text-error caret-error"
                : "border border-gray-400 focus:border-primary focus:text-primary caret-primary"
            }`}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className={`absolute top-3 right-3 ${
              errors.password ? "text-error" : "text-gray-400"
            }`}
          >
            {showPassword ? (
              <Eye variant="Outline" size={24} color="currentColor" />
            ) : (
              <EyeSlash variant="Outline" size={24} color="currentColor" />
            )}
          </button>
        </AuthFormField>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <input type="checkbox" {...register("terms")} className="w-4 h-4" />
            <p className="font-light text-gray-600">
              I agree to all{" "}
              <span className="font-medium text-primary border-b border-b-primary">
                Terms & Conditions
              </span>
            </p>
          </div>

          {errors.terms && (
            <p className="text-xs text-error">{errors.terms.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading || !isValid}
          className="w-full flex items-center justify-center h-12 bg-primary text-white hover:bg-primary-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed rounded-lg transition-all duration-300 cursor-pointer"
        >
          {isLoading ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            "Create Account"
          )}
        </button>
      </form>

      <div className="w-full flex items-center gap-2">
        <div className="h-[0.5px] flex-1 bg-gray-400" />
        <p className="text-gray-900">Or Log In with</p>
        <div className="h-[0.5px] flex-1 bg-gray-400" />
      </div>

      <AuthSocialButtons onGoogleClick={onClick} />

      <div className="flex items-center gap-3">
        <p className="font-light text-gray-600">Already have an account ?</p>
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="font-normal text-primary cursor-pointer"
        >
          sign in
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
