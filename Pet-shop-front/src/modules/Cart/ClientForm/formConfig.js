const formConfig = {
    username: {
        type: "text",
        placeholder: "Name",
        name: "username",
        rules: {
        required: "Name is required",
        },
    },
    phone: {
        type: "tel",
        placeholder: "Phone number",
        name: "phone",
        rules: {
        required: "Phone number is required",
        minLength: {
            value: 11,
            message: "Phone must contain at least 11 characters",
        },
        },
    },
    email: {
        type: "email",
        placeholder: "Email",
        name: "email",
        rules: {
        required: "Email is required",
        },
    },
};

export default formConfig;
