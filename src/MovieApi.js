import axios from "axios";

const key = "13d4a071";
const port = "5500"

export const searchMovie = (value="") => {
    return axios.get(`http://www.omdbapi.com/?apikey=${key}&type=movie&s=${value}`);
}

export const server = {
    
    get(path){
        return axios.get(`http://127.0.0.1:${port}${path}`);
    },

    post(path, obj){
        return axios.post(`http://127.0.0.1:${port}${path}`, obj);
    }
}

export const storage = {

    getWatchList(){
        if(localStorage.getItem("watchlist")){
            const obj = JSON.parse(localStorage.getItem("watchlist"));
            return obj;
        }
       
    },

    saveWatchlist(list){
        const value = JSON.stringify(list);
        localStorage.setItem("watchlist", value);
    },

    getFinishedList(){
        if(localStorage.getItem("finished")){
            const obj = JSON.parse(localStorage.getItem("finished"));
            return obj;
        }   
    },

    saveFinished(list){
        const value = JSON.stringify(list)
        localStorage.setItem("finished", value)
    },

    resetStorage(){
        localStorage.setItem("finished", "[]");
        localStorage.setItem("watchlist", "[]");
    }


}
