import React from "react";
import CardContainer from "../component/CardContainer";
import { MovieContext } from "../MovieContext";
import * as MovieApi from "../MovieApi.js";
import "./Home.css";

function Home() {

    const ctx = React.useContext(MovieContext);
    const {watchArr, setWatchArr} = ctx.watch;

    //MovieApi.storage.resetStorage();

    React.useEffect(()=>{
        setWatchArr([]);
    }, []);
    
    return (
        <div className="home-container">
            <h3>Watch List</h3>
            <br />
            {
                watchArr.length > 0 ? 
                <CardContainer type={"watch"} results={{ watch:  watchArr}} /> 

                :

                <div className="empty-message"><h3>Go To The "Explore" Page And Search For A Movie</h3></div>
            }
            
        </div>
    )
}

export default Home;
