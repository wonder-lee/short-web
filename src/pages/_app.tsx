import type { AppProps } from "next/app";
import styled, { ThemeProvider, css } from "styled-components";
import HeadTag from "@/components/common/headTag";
import Header from "@/components/common/header";
import UseIsMobile from "@/hooks/useIsMobile";
import GlobalStyles from "@/styles/golbalStyles";
import { theme } from "@/styles/theme";

type ConatainerPropsType = {
  isMobile: boolean;
};

export default function App({ Component, pageProps }: AppProps) {
  const { isMobile } = UseIsMobile();

  return (
    <>
      <Container isMobile={isMobile}>
        <HeadTag />
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </Container>
    </>
  );
}

const Container = styled.main<ConatainerPropsType>`
  ${({ isMobile }) => {
    return css`
      margin: 0 auto;
      max-width: ${isMobile ? "100%" : "460px"};
      main {
        margin-top: 85px;
      }
    `;
  }}
`;
