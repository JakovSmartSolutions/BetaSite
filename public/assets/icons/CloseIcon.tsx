export const CloseIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="url(#pattern0)" d="M0 0H24V24H0z"></path>
    <defs>
      <pattern
        id="pattern0"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use transform="scale(.01)" xlinkHref="#image0_596_2712"></use>
      </pattern>
      <image
        id="image0_596_2712"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,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"
      ></image>
    </defs>
  </svg>
);
