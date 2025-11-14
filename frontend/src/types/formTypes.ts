export type FormType = {
    documentId: string;
    title: string;
    successMessage?: string | null;
    errorMessage?: string | null;
    steps?: FormStepType[];
}

export type FormStepType = {
    id: string;
    layouts: {
        lg: FormLayoutType[];
        md: FormLayoutType[];
        sm: FormLayoutType[];
    }
}

export type FormLayoutType = {
    i: string;
    field: FormFieldType;
    w: number;
    h: number;
    minW: number;
    maxW: number;
    x: number;
    y: number;
}

export type FormFieldType = {
    i: string;
    label: string;
    placeholder: string;
    name: string;
    type: string;
    config: {
        required?: boolean;
        validations?: Array<{
            allowedTypes?: string;
        }>;
    };
    options: Array<{
        label: string;
        value: string;
    }>;
}