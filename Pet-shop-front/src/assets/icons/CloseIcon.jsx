const CloseIcon = ({
    width = 14,
    height = 14,
    color = '#282828',
    onClick,
    style,
}) => {
    return (
    <button
        onClick={onClick}
        style={{
        border: 'none',
        background: 'transparent',
        padding: 0,
        cursor: 'pointer',
        ...style,
        }}
        aria-label="Close"
    >
        <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M6 6L18 18M18 6L6 18"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        </svg>
    </button>
    );
};

export default CloseIcon;
