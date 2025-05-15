const TickIcon = ({ width = 18, height = 13, stroke = "#fff", ...props }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 16"
    width={width}
    height={height}
    fill="none"
    {...props}
    >
    <path
        d="M2 8.5L7 13.5L18 2.5"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
    />
    </svg>
);

export default TickIcon;
