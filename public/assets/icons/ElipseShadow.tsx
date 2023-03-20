export const ElipseShadow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="263"
    height="22"
    fill="none"
    viewBox="0 0 263 22"
    {...props}
  >
    <ellipse
      cx="131.5"
      cy="11"
      fill="url(#paint0_radial_570_338)"
      rx="131.5"
      ry="11"
    ></ellipse>
    <defs>
      <radialGradient
        id="paint0_radial_570_338"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(0 11 -131.5 0 131.5 11)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D0D0D0"></stop>
        <stop offset="0.766" stopColor="#D9D9D9" stopOpacity="0"></stop>
      </radialGradient>
    </defs>
  </svg>
);
