import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { createGlobalStyle, ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  const theme = {
    pallet: {
      main: "red",
      gray1: "#eee",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
  }
    body {
        padding: 0;
        margin: 0;
        overflow: hidden;
      
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */  

        font-family: Pretendard,  -apple-system, BlinkMacSystemFont, system-ui, Roboto,
          'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
          'Malgun Gothic', sans-serif;

          font-size: 1.6rem;
        
    }
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    h1,h2,h3, p, dl,dt,dd{
      margin:0;
      padding:0;
    }
    ul, li{
      margin:0;
      padding:0;
      list-style: none;
    }

    
  
    input {
      border: none;
      outline: none;
    }

    a{
      color: #000;
      text-decoration: none;
    }

    button{

      cursor: pointer;
      border:none;
      
    }

    
    * { 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
     box-sizing: border-box;      
  } 
  html, body {
    -webkit-overflow-scrolling: touch;
    overflow: auto !important;
    height: 100% !important;
  
    
  }
`;
