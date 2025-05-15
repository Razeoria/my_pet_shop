const AppLogo = ({ width = 70, height = 70, ...props }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 70 70"
    width={width}
    height={height}
    fill="none"
    {...props}
    >
    <circle cx="35" cy="35" r="35" fill="#0D50FF" />

    <path
        d="M33.445 21.056h4.11"
        stroke="#fff"
        strokeWidth="4.111"
        strokeLinecap="round"
        strokeLinejoin="round"
    />

    <path
        d="M49.89 35.445c-1.37 10.963-4.796 16.444-10.278 16.444H31.39c-5.481 0-8.907-5.481-10.278-16.444"
        stroke="#fff"
        strokeWidth="4.111"
        strokeLinecap="round"
        strokeLinejoin="round"
    />

    <path
        d="M35.5 47.778v4.111m-4.111-18.5v.02m8.222-.02v.02m-6.167 10.258c0 1.37.685 2.055 2.056 2.055 2.055 0 2.055-.684 2.055-2.055h-4.11Z"
        stroke="#fff"
        strokeWidth="4.111"
        strokeLinecap="round"
        strokeLinejoin="round"
    />

    <path
        d="M21.111 19l12.333 1.994-12.822 13.748a2.097 2.097 0 0 1-2.899.228 1.953 1.953 0 0 1-.672-1.961L21.111 19Z"
        stroke="#fff"
        strokeWidth="4.111"
        strokeLinecap="round"
        strokeLinejoin="round"
    />

    <path
        d="M49.889 19l-12.334 1.994 12.823 13.748a2.101 2.101 0 0 0 2.898.228 1.951 1.951 0 0 0 .673-1.961L49.889 19Z"
        stroke="#fff"
        strokeWidth="4.111"
        strokeLinecap="round"
        strokeLinejoin="round"
    />
    </svg>
);

export default AppLogo;

