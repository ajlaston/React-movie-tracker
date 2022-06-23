import React from "react";
import CardContainer from "../component/CardContainer.js";
import * as MovieApi from "../MovieApi.js";
import { MovieContext } from "../MovieContext.js";
import "./Explore.css";

function Explore() {

    const ctx = React.useContext(MovieContext);
    const {searchData, searchMovie, results, handleSearchForm} = ctx.explore;
    const searchBar = React.useRef();
    //searchBar.current.focus("none")

    React.useEffect(()=>{
        searchMovie(searchData);
    }, [searchData]);

    return (
        <div className="explore-container">
            
            <div className="explore-banner">
                <h3>Explore</h3>
                <input className="search" name="search" onChange={handleSearchForm} type="search" placeholder="search" value={searchData}/>
            </div>


            {
                searchData.length > 0 ? 
                <CardContainer results={results} type="explore"/> 

                :

                <div className="empty-message"><h3>Search For A Movie</h3></div>
            }

        </div>
    )
}

export default Explore;