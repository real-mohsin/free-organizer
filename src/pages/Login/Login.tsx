import "./Login.css";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Card } from "../../components/Card";
import { Stack } from "../../components/Layout/Stack";
import { Input } from "../../components/Input";
import { HStack } from "../../components/Layout/HStack/Hstack";
import { Checkbox } from "../../components/Checkbox";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Layout/Divider/Divider";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../../features/auth/schemas/login.schema";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hooks";

export default function Login() {

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),

        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    const navigate = useNavigate();

    const { login } = useAuth();

    const [loginError, setLoginError] =
        useState<string | null>(null);

    const onSubmit = async (
        data: LoginFormData,
    ) => {

        setLoginError(null);

        try {

            await login(data);

            navigate("/dashboard");

        } catch (error) {

            setLoginError(
                error instanceof Error
                    ? error.message
                    : "Unable to sign in.",
            );

        }

    };

    return (
        <Card className="fo-login__card">

            <Stack spacing="xl">

                {/* Header */}

                <Stack spacing="sm">

                    <h1 className="fo-login__title">
                        Welcome Back
                    </h1>

                    <p className="fo-login__subtitle">
                        Sign in to continue to Free Organizer.
                    </p>

                </Stack>

                {/* temp showing error */}

                {loginError && (
                    <p className="fo-login__error">
                        {loginError}
                    </p>
                )}

                {/* Form */}

                <form
                    className="fo-login__form"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <Stack spacing="lg">

                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="email"
                            error={errors.email?.message}
                            {...register("email")}
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            error={errors.password?.message}
                            {...register("password")}
                        />

                        <HStack
                            justify="space-between"
                            align="center"
                        >

                            <Checkbox
                                label="Remember me"
                                {...register("rememberMe")}
                            />

                            <Link
                                to="/forgot-password"
                                className="fo-login__link"
                            >
                                Forgot password?
                            </Link>

                        </HStack>

                        <Button
                            type="submit"
                            fullWidth
                        >
                            Sign In
                        </Button>

                    </Stack>

                </form>

                {/* Footer */}

                <Stack spacing="md">

                    <Divider>
                        OR
                    </Divider>

                    <p className="fo-login__register">

                        Don't have an account?{" "}

                        <Link
                            to="/register"
                            className="fo-login__link"
                        >
                            Create one
                        </Link>

                    </p>

                </Stack>

            </Stack>

        </Card>
    );

}