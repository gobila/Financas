const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  ultrawide: 2543,
};

// eslint-disable-next-line import/prefer-default-export
export function breakpointsMedia(breakpoint) {
  const breakpointsName = Object.keys(breakpoint);
  return breakpointsName.map((breakpointName) => breakpointName.style = `
        @media screen and (min-width: ${breakpoints[breakpointName]}px){
            ${breakpoint[breakpointName]}
        }
    `);
}
