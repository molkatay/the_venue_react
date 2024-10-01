'use client';

import { AppProps } from 'next/app';
import { ApiContext } from '../context/ApiContext';
import {FetchApiService} from "../services/FetchApiNavService";

const App = ({ Component, pageProps }: AppProps) => (
    <ApiContext.Provider value={new FetchApiService()}>
        <Component {...pageProps} />
    </ApiContext.Provider>
);

export default App;