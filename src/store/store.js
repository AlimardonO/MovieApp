import { create } from 'zustand';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWRjMjdjYjA0NDJmNjI3OGYzOGE3YTE2ZmMxYmExNCIsInN1YiI6IjY0YTQyMzY5ZTlkYTY5MDBlNDBjM2VlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Vjf82atS12q4hbf5rHS07J5Vv_xAKnwyOrJz1-9Wh4'
    }
};

const useStore = create((set) => ({
    movieList: [],
    fetchingData: async (currentPage) => {
        console.log(currentPage);
        const result = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`, options);
        const json = await result.json();
        set({ movieList: json.results });
    },
}));

export default useStore