import { useId } from "react";
import styles from "./TextInput.module.css";

const TextInput = ({
  labelText,
  fieldName,
  register,
  validate,
  errorMessage,
  tag = "input",
  customStyle = {},
  placeholderColor,
  ...restProps
}) => {
  const uniqueId = useId();

  const combinedStyle = {
    ...customStyle,
    ...(placeholderColor && { "--placeholder-color": placeholderColor }),
  };

  const sharedProps = {
    id: uniqueId,
    ...(fieldName && register ? register(fieldName, validate) : {}),
    ...restProps,
    className: styles.input,
    style: combinedStyle,
  };

  return (
    <div className={styles.fieldWrapper}>
      {labelText && (
        <label htmlFor={uniqueId} className={styles.label}>
          {labelText}
        </label>
      )}

      {tag === "textarea" ? (
        <textarea {...sharedProps} />
      ) : (
        <input {...sharedProps} />
      )}

      {errorMessage && (
        <span className={styles.errorText}>{errorMessage.message}</span>
      )}
    </div>
  );
};

export default TextInput;

