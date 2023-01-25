import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import { theme } from "@/styles/theme";

const GlobalStyles = createGlobalStyle`
${() => {
  const { padding, colors } = theme;
  return css`
    ${reset}
    a {
      text-decoration: none;
      color: inherit;
    }
    * {
      box-sizing: border-box;
    }
    body {
      width: 100%;
      background-color: ${colors.black.default};
      color: ${colors.white.default};
      padding: ${padding.default};
    }
  `;
}}
`;

export default GlobalStyles;
