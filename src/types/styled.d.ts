import 'styled-components';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    neutral?: Palette['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
  interface SimplePaletteColorOptions {
    light?: string;
    main?: string;
    dark?: string;
    background?: string;
  }
  interface PaletteColor {
    light?: string;
    main?: string;
    dark?: string;
    background?: string;
  }
}
declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true; // adds the `tablet` breakpoint
    laptop: true;
    desktop: true;
  }
}
