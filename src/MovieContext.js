import React, { createContext } from "react";
import * as  MovieApi from "./MovieApi.js";

const MovieContext = createContext();

function MovieContextProvider(props) {

    const [watchArr, setWatchArr] = React.useState([]);
    const [finishedArr, setFinishedArr] = React.useState([]);
    const [searchData, setSearchData] = React.useState("");
    const [results, setResults] = React.useState("");
    const [appState, setAppState] = React.useState("idle");

    const state = {

        explore: {
            searchData: searchData,
            results: results,

            handleSearchForm(e) {
                setSearchData(e.target.value);
            },

            searchMovie(search) {
                MovieApi.searchMovie(search).then(res => {
                    //for each push to new array after chcecking if new array doesnt include item
                    const filteredArr = [];
                    if(res.data.Search){

                        res.data.Search.forEach(item=>{
                            let check = false;

                            filteredArr.forEach(item2=>{
                                if(item2.Title === item.Title){
                                    check = true;
                                }
                            });

                            if(check){
                                
                            } else {
                                filteredArr.push(item);
                            }

                        })
                    }

                    setResults({Search : filteredArr});
                });
            },
        },

        watch: {
            watchArr: watchArr,
            setWatchArr
        },

        finished: {
            finishedArr: finishedArr,
            setFinishedArr
        },

        checkSaved(movie) {
            let saved = false;

            if (watchArr.length > 0) {
                watchArr.forEach(film => {
                    if (film.Title === movie.Title) {
                        saved = true;
                    }
                });
            }

            if (finishedArr.length > 0) {
                finishedArr.forEach(film => {
                    if (film.Title === movie.Title) {
                        saved = true;
                    }
                });
            }

            return saved;
        },

        addToList(obj) {
            setWatchArr(prev => {
                prev.push(obj);
                return prev;
            });
            setAppState("save_watchlist");
        },

        deleteWatchItem(title) {
            setWatchArr(prev => {
                const newArr = prev.filter(item => item.Title !== title);
                return newArr;
            });
            setAppState("save_watchlist");
        },

        deleteFinishedItem(title) {
            setFinishedArr(prev => {
                const newArr = prev.filter(item => item.Title !== title);
                return newArr;
            });
            setAppState("save_finished_list");
        },

        addToFinished(title, obj) {
            setWatchArr(prev => {
                const newArr = prev.filter(item => item.Title !== title);
                return newArr;
            });

            setFinishedArr(prev => {
                prev.push(obj);
                return prev;
            });
            setAppState("add_to_finished_list");
        },

        loadWatchList() {
          
                const arr = MovieApi.storage.getWatchList();
                setWatchArr(arr);
            

        },

        loadFinishedList() {
            
                const arr = MovieApi.storage.getFinishedList();
                setFinishedArr(arr);
            

        }

    }

    React.useEffect(() => {
        state.loadWatchList();
        state.loadFinishedList();
    }, []);

    //state machine for app
    React.useEffect(() => {
        const state = {
            "idle": {
                execute() {
                    return;
                }
            },

            "save_watchlist": {
                execute() {
                    MovieApi.storage.saveWatchlist(watchArr);
                    setAppState("idle");
                }
            },

            "add_to_finished_list": {
                execute() {
                    MovieApi.storage.saveFinished(finishedArr);
                    MovieApi.storage.saveWatchlist(watchArr);
                    setAppState("idle");
                }
            },

            "save_finished_list": {
                execute() {
                    MovieApi.storage.saveFinished(finishedArr);
                    setAppState("idle");
                }
            }
        }

        state[appState].execute();

    }, [appState]);


    return (
        <MovieContext.Provider value={state}>
            {props.children}
        </MovieContext.Provider>
    )
}

export { MovieContextProvider, MovieContext };