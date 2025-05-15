const InstagramIcon = ({ width = 38, height = 38, color = '#282828', ...props }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 38 38"
    width={width}
    height={height}
    fill="none"
    {...props}
    >
    <path
        fill={color}
        d="M28.5 0h-19C4.275 0 0 4.274 0 9.5v19C0 33.724 4.275 38 9.5 38h19c5.224 0 9.5-4.276 9.5-9.5v-19C38 4.274 33.724 0 28.5 0ZM19 26.916a7.917 7.917 0 1 1 0-15.834 7.917 7.917 0 0 1 0 15.834Zm10.292-15.833a2.374 2.374 0 1 1-.001-4.749 2.374 2.374 0 0 1 0 4.75Z"
    />
    </svg>
);

export default InstagramIcon;

