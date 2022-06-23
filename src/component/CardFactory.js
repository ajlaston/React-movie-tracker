import React from "react";
import "./CardFactory.css";
import { MovieContext } from "../MovieContext";

function CardFactory(props) {

    const ctx = React.useContext(MovieContext);

    const [addBtnTxt, setAddBtnTxt] = React.useState("");
    const [saved, setSaved] = React.useState(false);
    const [btnColor, setBtnColor] = React.useState("");
    const addBtnRef = React.useRef();

    const addToWatch = () => {
        setAddBtnTxt(prev => prev === "Add To Watchlist" ? "Added" : "");
        setBtnColor("rgb(227, 84, 84)")
        setSaved(true);
        ctx.addToList(props.obj);
    }

    const deleteItem = () => {
        ctx.deleteWatchItem(props.title);
    }

    const deleteFinish = () => {
        ctx.deleteFinishedItem(props.title);
    }

    const addToFinished = () => {
        ctx.addToFinished(props.title, props.obj);
    }

    React.useEffect(() => {
        setAddBtnTxt(props.saved ? "Added" : "Add To Watchlist");
        setSaved(props.saved ? true : false);
        setBtnColor(props.saved ? "rgb(227, 84, 84)" : "rgba(65, 209, 52, 0.914)");
    }, []);

    React.useEffect(()=>{
        if(props.type === "explore" && addBtnTxt !== "Added"){
            addBtnRef.current.style.transition = "ease-in .2s";
        }
    }, [addBtnTxt])

    return (

        <div className="card-container">

            {
                props.type === "explore" ?

                    <div className="explore-card">
                        <div className="img" style={{ backgroundImage: `url(${props.img})` }}></div>
                        <div className="title-container">
                            <p>{props.title}</p>
                        </div>
                        <button ref={addBtnRef} onClick={addToWatch} style={{ backgroundColor: btnColor }} disabled={saved}>{addBtnTxt}</button>
                    </div>

                    :

                    props.type === "watch" ?

                        <div className="watch-card">
                            <div className="img" style={{ backgroundImage: `url(${props.img})` }}></div>
                            <div className="title-container">
                                <p>{props.title}</p>
                            </div>
                            <button onClick={addToFinished}>Finished</button>
                            <button onClick={deleteItem}>Delete</button>
                        </div>

                        :

                        props.type === "finished" ?

                            <div className="watched-card">
                                <div className="img" style={{ backgroundImage: `url(${props.img})` }}></div>
                                <div className="title-container">
                                    <p>{props.title}</p>
                                </div>
                                <button onClick={deleteFinish}>Delete</button>
                            </div>

                            :

                            <div className="no-results">

                                <h2>{}</h2>

                            </div>

            }


        </div>
 

    )
}

// CardFactory.defaultProps = {
//     idleMessage: "Search For A Movie"
// }

export default CardFactory;