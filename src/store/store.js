import { create } from 'zustand';

const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWRjMjdjYjA0NDJmNjI3OGYzOGE3YTE2ZmMxYmExNCIsInN1YiI6IjY0YTQyMzY5ZTlkYTY5MDBlNDBjM2VlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Vjf82atS12q4hbf5rHS07J5Vv_xAKnwyOrJz1-9Wh4'
    }
};

const useStore = create((set) => ({
    movieList: [],
    fetchingData: async () => {
        const result = await fetch(url, options);
        const json = await result.json();
        set({ movieList: json.results });
    },
}));

export default useStore