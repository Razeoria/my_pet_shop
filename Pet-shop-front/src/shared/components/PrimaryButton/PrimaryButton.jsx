import css from "./PrimaryButton.module.css";

const PrimaryButton = (props) => {
  const { children, type = "button", width = "auto", ...otherProps } = props;

  return (
    <button
      type={type}
      className={css.PrimaryButton}
      style={{ width }}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

