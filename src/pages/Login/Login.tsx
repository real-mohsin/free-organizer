import "./Login.css";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


import { AuthHero } from "../../components/app/AuthHero";


import type { LoginFormValues } from "./Login.types";
import { AuthLayout } from "../../layouts/AuthLayout/AuthLayout";
import { Card } from "../../components/Card";
import { Stack } from "../../components/Layout/Stack";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Layout/Divider/Divider";

export default function Login() {

    const {
        register,
        handleSubmit,
    } = useForm<LoginFormValues>({
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    const onSubmit = (data: LoginFormValues) => {
        console.log(data);
    };

    return (

        <Card className="fo-login__card">

            <Stack spacing="lg">

                <header className="fo-login__header">

                    <h2 className="fo-login__title">
                        Welcome back
                    </h2>

                    <p className="fo-login__subtitle">
                        Sign in to continue to Free Organizer.
                    </p>

                </header>

                <form
                    className="fo-login__form"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <Stack spacing="md">

                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="email"
                            {...register("email")}
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            {...register("password")}
                        />

                        <label className="fo-login__remember">

                            <input
                                type="checkbox"
                                {...register("rememberMe")}
                            />

                            <span>
                                Remember me
                            </span>

                        </label>

                        <Button
                            type="submit"
                            fullWidth
                        >
                            Sign In
                        </Button>

                    </Stack>

                </form>

                <Divider />

                <Stack
                    spacing="sm"
                    align="center"
                >

                    <Link to="/forgot-password">
                        Forgot password?
                    </Link>

                    <Link to="/register">
                        Create an account
                    </Link>

                </Stack>

            </Stack>

        </Card>

    );

}