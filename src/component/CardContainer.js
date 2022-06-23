import React from "react";
import CardFactory from "./CardFactory";
import "./CardContainer.css";
import { MovieContext } from "../MovieContext";

function CardContainer(props) {


    const { explore, checkSaved, watch } = React.useContext(MovieContext);
    //const {watchArr} = watch;

    //console.log("results:", props.results.Search);

    const generateCards = () => {
        if (props.results.Search) {
            const mappedCards = props.results.Search.map((movie, index) => {

                const saved = checkSaved(movie);

                return <CardFactory
                    key={index}
                    type={props.type}
                    img={movie.Poster}
                    title={movie.Title}
                    obj={movie}
                    saved={saved}
                />
            })

            return mappedCards;

        } else if (props.results.watch) {
            const mappedCards = props.results.watch.map((movie, index) => {

                return <CardFactory
                    key={index}
                    type={props.type}
                    img={movie.Poster}
                    title={movie.Title}
                    obj={movie}
                />
            });

            return mappedCards;

        } else if (props.results.finished) {
            const mappedCards = props.results.finished.map((movie, index) => {

                return <CardFactory
                    key={index}
                    type={props.type}
                    img={movie.Poster}
                    title={movie.Title}
                    obj={movie}
                />
            });

            return mappedCards;

        } else {
            return <CardFactory />
        }
    }

    const mapped = generateCards();


    return (
        <div className="cards-wrapper">
            <div className="cards">
                {mapped}
            </div>
        </div>

    )
}

export default CardContainer;