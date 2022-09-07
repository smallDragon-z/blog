import { NextPage } from 'next';
import { StoreProvider } from 'store/index';
import ErrorBoundary from 'components/ErrorBoundary';
import Layout from 'components/layout';
import '../styles/globals.css';
import Script from 'next/script';

declare global{
 export interface Window{
   webtracing:any
  }
}

interface IProps {
  initialValue: Record<any, any>;
  Component: NextPage;
  pageProps: any;
}

export function reportWebVitals(mertic: any) {
  if (mertic.label === 'web-vital') {
    // console.log('mertic', mertic);
  }

  switch (mertic.name) {
    case 'FCP':
      console.log('FCP', mertic);
      break;
    case 'LCP':
      console.log('LCP', mertic);
      break;
    case 'CLS':
      console.log('CLS', mertic);
      break;
    case 'FID':
      console.log('FID', mertic);
      break;
    case 'TTFB':
      console.log('TTFB', mertic);
      break;
    default:
      break;
  }

  const body = JSON.stringify(mertic);
  const url = 'https://xxxx.com';

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true })
  }
}
function MyApp({ initialValue, Component, pageProps }: IProps) {
const initWeb = ()=>{
  if(window.webtracing){
    window.webtracing.init({
      requestUrl: 'http://localhost:3000/api/info/getInfo',
      appName: 'chengxh',
      event: true,
      performance: false,
      pv: true,
      error: true,
    })
  }
}

  const renderLayout = () => {
    if ((Component as any).layout === null) {
      return <Component {...pageProps} />;
    } else {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    }
  };
  return (
  <div>
    <Script src='https://cdn.jsdelivr.net/npm/web-tracing' strategy='afterInteractive' onLoad={()=>{
      initWeb()
    }}></Script>
    <ErrorBoundary>
      <StoreProvider initialValue={initialValue}>
        {renderLayout()}
      </StoreProvider>
    </ErrorBoundary>
  </div>
  );
}

MyApp.getInitialProps = async ({ ctx }: { ctx: any }) => {
  const { userId, nickname, avatar } = ctx?.req?.cookies || {};
  return {
    initialValue: {
      user: {
        userInfo: {
          userId,
          nickname,
          avatar,
        },
      },
    },
  };
};

export default MyApp;
