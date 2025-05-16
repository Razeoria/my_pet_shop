import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import TextInput from "../../../shared/components/TextInput/TextInput";
import PrimaryButton from "../../../shared/components/PrimaryButton/PrimaryButton";
import { sendCoupon } from "../../../shared/api/api";

import formConfig from "./formConfig";

const ClientForm = ({ onOrder }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const [serverError, setServerError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        if (serverError) {
        const timer = setTimeout(() => setServerError(null), 5000);
        return () => clearTimeout(timer);
        }
    }, [serverError]);

    useEffect(() => {
        if (successMessage) {
        const timer = setTimeout(() => setSuccessMessage(null), 5000);
        return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const onSubmit = async (values) => {
        setServerError(null);
        setSuccessMessage(null);
        try {
        await sendCoupon(values);
        setSuccessMessage("Application sent! Coupon will be sent to your email soon.");
        reset();
        if (onOrder) onOrder();
        } catch (err) {
        setServerError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", maxWidth: "516px" }}>
        {serverError && <div style={{ color: "red" }}>{serverError}</div>}
        {successMessage && <div style={{ color: "var(--text-primary)" }}>{successMessage}</div>}

        <TextInput
            {...formConfig.username}
            register={register}
            errorMessage={errors.username}
            placeholderColor="var(--text-muted)"
            customStyle={{
            width: "100%",
            color: "var(--text-primary)",
            backgroundColor: "#fff",
            }}
        />

        <TextInput
            {...formConfig.phone}
            register={register}
            errorMessage={errors.phone}
            placeholderColor="var(--text-muted)"
            customStyle={{
            width: "100%",
            color: "var(--text-primary)",
            backgroundColor: "#fff",
            }}
        />

        <TextInput
            {...formConfig.email}
            register={register}
            errorMessage={errors.email}
            placeholderColor="var(--text-muted)"
            customStyle={{
            width: "100%",
            color: "var(--text-primary)",
            backgroundColor: "#fff",
            }}
        />

        <PrimaryButton
            type="submit"
            disabled={isSubmitting}
            style={{
            margin: "16px 0 32px 0",
            width: "100%",
            }}
        >
            {isSubmitting ? "Send..." : "Order"}
        </PrimaryButton>
        </form>
    );
};

export default ClientForm;

