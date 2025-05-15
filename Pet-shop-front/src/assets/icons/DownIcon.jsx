const DownIcon = ({ width = 14, height = 8, stroke = '#282828', ...props }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 8"
    width={width}
    height={height}
    fill="none"
    {...props}
    >
    <path
        d="M2 2L7 6L12 2"
        stroke={stroke}
        strokeWidth={1.35}
        strokeLinecap="round"
        strokeLinejoin="round"
    />
    </svg>
);

export default DownIcon;

