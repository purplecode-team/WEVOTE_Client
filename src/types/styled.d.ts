import "styled-components";
import { Palette } from '@material-ui/core/styles/createPalette';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral?: Palette['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
  interface SimplePaletteColorOptions {
    light?: string,
    main?: string,
    dark?: string,
    background?: string,
  }
  interface PaletteColor {
    light?: string,
    main?: string,
    dark?: string,
    background?: string,
  }
}
declare module "styled-components" {
  export interface DefaultTheme {
    // 테마 적용 시, 타입 코드 작성
  }
}
declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true; // adds the `tablet` breakpoint
    laptop: true;
    desktop: true;
  }
}