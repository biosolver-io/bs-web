function LinkedInIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 50 50"
      className={className}
    >
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M9 45h32a4 4 0 004-4V9a4 4 0 00-4-4H9a4 4 0 00-4 4v32a4 4 0 004 4z"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M11 20L17 20 17 33.135 17 39 11 39z"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.976"
        d="M14 17h0c-1.8 0-3-1.133-3-2.533S12.2 12 14 12s2.925 1.067 3 2.467c0 1.4-1.125 2.533-3 2.533z"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M39 39h-6V29c0-2-1-4-3.5-4.043C27.022 24.913 26 27 26 29v10h-6V20h6v2.561S27.93 20 31.813 20C35.778 20 39 22.726 39 28.261V39z"
      ></path>
    </svg>
  );
}

export default LinkedInIcon;