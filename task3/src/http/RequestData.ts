import axios from "axios";

const API_URL = "http://universities.hipolabs.com/search?country="
const DEFAULT_LIMIT = "&limit=10"

export async function getData(country: string){
    try {
        const data = await axios.get<ResponseData[]>(
            API_URL+country+DEFAULT_LIMIT,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        return data.data;
    } catch (error){
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}