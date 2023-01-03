import React, { useState } from "react";
import './ComponentStyles/Searchbar.css';
import data from "../data.js";
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
    let id = 0;

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

    function searchProductByName(){
    }

    return (
        <div className="search-bar">
            <input type="text" id="searchvalue" placeholder="search your poduct here" onChange={searchProduct} value={searchvalue} ></input>
            <i onClick={searchProductByName}><FaSearch /></i>
            {suggestion.length !== 0 &&
                <div id="product-title-holder">
                    {suggestion.map((key) => {
                        return <div key={id++}>{key.name.toLowerCase()}</div>;
                    })}
                </div>
            }
        </div>
    )
}

export default Searchbar;