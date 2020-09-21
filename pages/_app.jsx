import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';

const MyApp = ({ Component, pageProps }) => {
        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const pageProps = await App.getInitialProps(appContext);

  return { pageProps}
}



//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);

