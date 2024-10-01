import React, { createContext, useContext } from 'react';
import { ApiService,FetchApiService } from '../services/ApiService';
import {FetchApiService} from "../services/FetchApiNavService";

const ApiContext = createContext<ApiService>(new FetchApiService());

export const useApi = () => useContext(ApiContext);
