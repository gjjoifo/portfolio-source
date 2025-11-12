export function LogoClock(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="logo"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <circle cx="16" cy="16" r="14"></circle>
        <path d="M16 8v8l4 4"></path>
      </g>
    </svg>
  )
}
