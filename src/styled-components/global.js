import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import media from './media';

import theme from './theme';

export default injectGlobal`
  ${normalize()};

  html,
  body,
  h1,
  #root {
    font-family: ${theme.fonts.graphik.regular}, sans-serif;
    font-display: swap;
    line-height: ${theme.lineHeight.regular};
    color: ${theme.colors.textColor};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.graphik.medium};
    font-weight: 500;
  }

  html {
    font-size: 62.5%;
    height: 100%;
    box-sizing: border-box;
  }

  body {
    font-size: ${theme.fontSize.regular};
    min-height: 100%;
    background-color: ${theme.colors.bg};
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }

  p {
    margin: 0;
    color: ${theme.colors.textOpaque};
    line-height: ${theme.lineHeight.extraSmall};
    font-size: ${theme.fontSize.small};
    ${media.tablet`
      margin: 10px 0;
      line-height: ${theme.lineHeight.regular};
      font-size: ${theme.fontSize.medium};
    `}
  }

  small {
    font-family: ${theme.fonts.graphik.regular};
    line-height: ${theme.lineHeight.extraSmall};
    font-size: ${theme.fontSize.small};
    color: ${theme.colors.lightGrey};
  }

  a {
    color: ${theme.colors.link};
    text-decoration: none;
    font-family: ${theme.fonts.graphik.medium};
    transition: ${theme.transition};

    &:focus,
    &:hover {
      transition: ${theme.transition};
    }

    &:focus {
      opacity: ${theme.opacity.text07};
    }
  }

  b {
    font-family: ${theme.fonts.graphik.medium};
  }

  h1 {
    font-size: ${theme.fontSize.bitlarger};
    line-height: ${theme.lineHeight.bitlarger};
    margin-bottom: 20px;
    min-height: 90px;
    ${media.tablet`
      font-size: ${theme.fontSize.giant};
      line-height: ${theme.lineHeight.larger};
    `}
  }

  h2 {
    font-size: ${theme.fontSize.large};
    line-height: ${theme.lineHeight.bitlarger};
    margin: 20px 0;
    ${media.tablet`
      letter-spacing: -0.38px;
      font-size: ${theme.fontSize.larger};
      line-height: ${theme.lineHeight.muchlarger};
    `}
  }

  h3 {
    font-size: ${theme.fontSize.default};
    line-height: ${theme.lineHeight.regular};
    margin: 5px 0;
    ${media.tablet`
      margin: 10px 0;
      font-size: ${theme.fontSize.large};
      line-height: ${theme.lineHeight.medium};
    `}
  }

  h4 {
    font-size: ${theme.fontSize.medium};
    line-height: ${theme.lineHeight.medium};
    margin: 0 0 10px;
  }

  h5 {
    font-size: ${theme.fontSize.regular};
    line-height: ${theme.lineHeight.medium};
    margin: 0 0 10px;
  }

  h6 {
    font-size: ${theme.fontSize.small};
    line-height: ${theme.lineHeight.medium};
    margin: 0 0 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ::-webkit-input-placeholder {
    font-weight: normal;
    font-family: ${theme.fonts.graphik.regular};
  }

  ::-moz-placeholder {
    font-weight: normal;
    font-family: ${theme.fonts.graphik.regular};
  }

  :-ms-input-placeholder {
    font-weight: normal;
    font-family: ${theme.fonts.graphik.regular};
  }

  :-moz-placeholder {
    font-weight: normal;
    font-family: ${theme.fonts.graphik.regular};
  }

    /* stylelint-disable */
    @font-face {
      font-family: ${theme.fonts.graphik.regular};
      src: url('fonts/graphikLC/GraphikLC-Regular.otf');
    }

    @font-face {
    font-family: ${theme.fonts.graphik.medium};
      src: url('fonts/graphikLC/GraphikLC-Medium.otf');
    }

  `;