import { CSSProperties } from 'styled-components';

export const defaultBreakPoints = {
  phoneMaxWidth: 680,
  tabletMaxWidth: 990,
};

export const headlineTypography = {
  fontFamily: "'Source Sans Pro', 'Helvetica', 'Arial', sans",
};

export const typography = {
  h1: {
    ...headlineTypography,
    marginBottom: 24,
    marginTop: 16,
    fontSize: '2.25rem',
  } as CSSProperties,
  h2: {
    ...headlineTypography,
  } as CSSProperties,
  h3: {
    ...headlineTypography,
  } as CSSProperties,
  h4: {
    ...headlineTypography,
  } as CSSProperties,
  h5: {
    ...headlineTypography,
  } as CSSProperties,
  h6: {
    ...headlineTypography,
  } as CSSProperties,
  paragraph: {
    fontFamily: "'Source Sans Pro', 'Helvetica', 'Arial', sans",
    fontWeight: 'normal',
    fontSize: '1.25rem',
    lineHeight: 'auto',
    maxWidth: 640,
    opacity: 0.8,
    marginTop: 24,
    marginBottom: 24,
  } as CSSProperties,
  button: {
    fontFamily: "'Source Sans Pro', 'Helvetica', 'Arial', sans",
    fontSize: '1.125rem',
    lineHeight: '1.125em',
    fontWeight: 600,
  } as CSSProperties,
  label: {
    fontFamily: "'Source Sans Pro', 'Helvetica', 'Arial', sans",
    fontWeight: 'bold',
    fontSize: '1rem',
    letterSpacing: '0.1em',
  } as CSSProperties,
  link: {
    fontFamily: "'Source Sans Pro', 'Helvetica', 'Arial', sans",
    fontSize: '0.875rem',
    letterSpacing: '0.05em',
  } as CSSProperties,
  caption: {
    fontFamily: "'Source Sans Pro' , 'Helvetica' , 'Arial' , sans",
    fontSize: '0.75rem',
    opacity: 0.5,
  },
  small: {
    fontSize: '0.75em',
  },
};

export const DefaultTheme = {
  background: 'white',
  foreground: 'black',

  transition: '250ms',

  media: {
    phone: `(max-width: ${defaultBreakPoints.phoneMaxWidth}px)`,
    tablet: `(min-width: ${defaultBreakPoints.phoneMaxWidth}px) and (max-width: ${defaultBreakPoints.tabletMaxWidth}px)`,
    desktop: `(min-width: ${defaultBreakPoints.tabletMaxWidth}px)`,
  },

  typography,

  elevation: ['none'],

  divider: {
    width: 1,
    opacity: 0.1,
  },
};

export type Theme = typeof DefaultTheme;
