// services/FetchApiService.ts
import { ApiService } from './ApiService';

export class FetchApiService implements ApiService {
    async fetchMenuData(): Promise<any> {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/global?populate[topNavigation][populate]=*`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        return data.data.topNavigation;
    }
}
