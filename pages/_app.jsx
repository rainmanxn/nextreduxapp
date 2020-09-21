import App from 'next/app';
import React from 'react';
import { wrapper } from '../redux/store';


const MyApp = ({ Component, pageProps }) => {
        return (
                <Component {...pageProps}/>
        );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const pageProps = await App.getInitialProps(appContext);

  return { pageProps }
}

export default wrapper.withRedux(MyApp);
