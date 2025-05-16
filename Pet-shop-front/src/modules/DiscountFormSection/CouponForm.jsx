import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../shared/components/TextInput/TextInput";
import PrimaryButton from "../../shared/components/PrimaryButton/PrimaryButton";
import { sendCoupon } from "../../shared/api/api";
import formConfig from "./formConfig";

const CouponForm = () => {
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
    } catch (err) {
      setServerError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "100%",
        maxWidth: "516px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {serverError && <div style={{ color: "red" }}>{serverError}</div>}
      {successMessage && <div style={{ color: "#fff" }}>{successMessage}</div>}

      {/*  */}
      {Object.values(formConfig).map((field) => (
        <TextInput
          key={field.fieldName}
          {...field}
          register={register}
          errorMessage={errors[field.fieldName]}
          placeholderColor="var(--text-muted)"
          customStyle={{
            width: "100%",
            backgroundColor: "#fff",
            color: "var(--text-primary)",
          }}
        />
      ))}

      <PrimaryButton
        type="submit"
        disabled={isSubmitting}
        style={{
          margin: "16px 0 32px 0",
          width: "100%",
          color: "var(--text-primary)",
          backgroundColor: "#fff",
        }}
      >
        {isSubmitting ? "Sending..." : "Get a discount"}
      </PrimaryButton>
    </form>
  );
};

export default CouponForm;




