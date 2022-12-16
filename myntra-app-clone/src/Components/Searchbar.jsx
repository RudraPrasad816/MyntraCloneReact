import React, { useState } from "react";
import './ComponentStyles/Searchbar.css';
import data from "../data.js";

const Searchbar = () => {

    const [searchvalue, setValue] = useState("");
    const [suggestion, setSuggestion] = useState([]);

    const searchProduct = (e) => {
        setValue(e.target.vlaue);
        if (e.target.value === "") {
            setSuggestion([]);
        }
        else {

            let newSuggestion = data.filter((value) => {
                return value.name.toLowerCase().includes((e.target.value.toLowerCase()))
            })
            setSuggestion(newSuggestion);
        }
    }

    return (
        <div className="search-bar">
            <input type="text" id="search" placeholder="search your poduct here" onChange={searchProduct} value={searchvalue} ></input>
            {suggestion.length !== 0 &&
                <div id="product-title-holder">
                    {suggestion.map((key) => {
                        return <div>{key.name.toLowerCase()}</div>;
                    })}
                </div>
            }
        </div>
    )
}

export default Searchbar;