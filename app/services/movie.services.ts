import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
    },
});

export const searchMovie = async (query: string) => {
    try {
        const response = await client.get("/search/movie", {
            params: {
                query,
            },
        });

        if (response.data && response.data.results) {
            return response.data.results;
        } else {
            console.error("Could not get data from the MovieDB API.");
        }
    } catch (error) {
        console.log(error);
        return [];
    }
};
