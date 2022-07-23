import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const newTheme = {
    fonts: {
      body: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif `,
    },
    initialColorMode: "dark",
    useSystemColorMode: false,
  };
  const theme = extendTheme({ newTheme });
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
