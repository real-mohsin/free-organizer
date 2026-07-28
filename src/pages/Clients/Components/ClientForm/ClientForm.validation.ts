import { z } from "zod";

export const clientFormSchema = z.object({

    name:

        z.string()

            .trim()

            .min(
                1,
                "Client name is required.",
            ),

    company:

        z.string().trim(),

    email:

        z.string()

            .trim()

            .min(
                1,
                "Email is required.",
            )

            .email(
                "Please enter a valid email.",
            ),

    phone:

        z.string().trim(),

    country:

        z.string().trim(),

    status:

        z.enum([

            "active",

            "inactive",

            "archived",

        ]),

    notes:

        z.string().trim(),

});

export type ClientFormSchema =
    z.infer<typeof clientFormSchema>;