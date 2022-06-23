import React from "react";
import CardContainer from "../component/CardContainer";
import { MovieContext } from "../MovieContext";
import * as MovieApi from "../MovieApi.js";
import "./Finished.css";

function Finished(){

    const ctx = React.useContext(MovieContext);
    const {finishedArr} = ctx.finished
    

    React.useState(()=>{

    }, [])

    return (
        <div className="watched-container">
            <h3 className="header">Finished</h3>
            <br/>
            

            {
                finishedArr.length > 0 ? 
                <CardContainer type={"finished"} results={{finished : finishedArr}}/>

                :

                <div className="empty-message"><h3>No Movies Finished Yet</h3></div>
            }
        </div>
    )
}

export default Finished;