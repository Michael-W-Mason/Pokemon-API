import React, {useEffect, useState, useRef} from "react";
import { useIsMount } from "../customhooks/UseIsMount"; 

const PokeButton = (props) => {
    const isMount = useIsMount();
    const [click, setClick] = useState(false);

    useEffect(() => {
        if(isMount){
            
        }
        else{
            fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then((res) => {
                return(res.json());
            })
            .then((convertedRes) => {
                return props.setPokeList(convertedRes.results);
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
        }
        }, [click]);

    const clickedButton = () =>{
        if(click){
            setClick(false);
        }
        else{
            setClick(true);
        }
    }

    return(
        <button onClick={clickedButton}>Fill With Pokemon</button>
    );
}

export default PokeButton;