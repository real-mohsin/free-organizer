import "./ClientForm.css";

import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { Textarea } from "../../../../components/Textarea";
import { Stack } from "../../../../components/Layout/Stack";

import type {
    ClientFormProps,
} from "./ClientForm.types";

const STATUS_OPTIONS = [

    {
        label: "Active",
        value: "active",
    },

    {
        label: "Inactive",
        value: "inactive",
    },

    {
        label: "Archived",
        value: "archived",
    },

];

export function ClientForm({

    id,

    values,

    errors,

    onChange,

    onSubmit,

}: ClientFormProps) {

    return (

        <form

            id={id}

            noValidate

            className="fo-client-form"

            onSubmit={(event) => {

                event.preventDefault();

                onSubmit();

            }}

        >

            <Stack spacing="lg">

                <Input

                    label="Name"

                    required

                    value={values.name}

                    error={errors?.name}

                    onChange={(event) =>

                        onChange(

                            "name",

                            event.target.value,

                        )

                    }

                />

                <Input

                    label="Company"

                    value={values.company}

                    error={errors?.company}

                    onChange={(event) =>

                        onChange(

                            "company",

                            event.target.value,

                        )

                    }

                />

                <Input

                    label="Email"

                    type="email"

                    required

                    value={values.email}

                    error={errors?.email}

                    onChange={(event) =>

                        onChange(

                            "email",

                            event.target.value,

                        )

                    }

                />

                <Input

                    label="Phone"

                    value={values.phone}

                    error={errors?.phone}

                    onChange={(event) =>

                        onChange(

                            "phone",

                            event.target.value,

                        )

                    }

                />

                <Input

                    label="Country"

                    value={values.country}

                    error={errors?.country}

                    onChange={(event) =>

                        onChange(

                            "country",

                            event.target.value,

                        )

                    }

                />

                <Select

                    label="Status"

                    value={values.status}

                    options={STATUS_OPTIONS}

                    onChange={(event) =>

                        onChange(

                            "status",

                            event.target.value as typeof values.status,

                        )

                    }

                />

                <Textarea

                    label="Notes"

                    rows={4}

                    value={values.notes}

                    error={errors?.notes}

                    onChange={(event) =>

                        onChange(

                            "notes",

                            event.target.value,

                        )

                    }

                />

            </Stack>

        </form>

    );

}