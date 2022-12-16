import React, { useState } from 'react';
import Card from "./Card.jsx";
import './ComponentStyles/FilterPage.css';
import data from "../data.js";


const FilterPage = () => {

    //taking variables for data of different category
    const [newData, setNewData] = useState(data);

    //function to get data of gender category
    const genderCategory = (selectedGender) => {
        if (selectedGender === "") {
            setNewData(data);
        } else {
            setNewData(data.filter((ele) => {
                return ele.gender === selectedGender;
            }))
        }
    }

    //function to get data of different style category
    const typeCategory = (selectedCategory) => {
        if (selectedCategory === "folded") {
            setNewData(newData.filter((ele) => {
                return ele.folded === "Y";
            }));
        }
        else if (selectedCategory === "white") {
            setNewData(newData.filter((ele) => {
                return ele.link.includes(selectedCategory);
            }))
        }
    }

    return (
        <>
            <div className='home'>
                <div className="filterSection">
                    <div className="gender-category">
                        <h4>Gender</h4>
                        <input
                            type="radio"
                            name="gender"
                            onClick={() => { genderCategory("") }}
                        />
                        <label>ALL</label>
                        <br />
                        <input
                            type="radio"
                            name="gender"
                            value="M"
                            onClick={() => { genderCategory("M") }}
                        />
                        <label>MEN</label>
                        <br />
                        <input
                            type="radio"
                            name="gender"
                            value="F"
                            onClick={() => { genderCategory("F") }}
                        />
                        <label>WOMEN</label>
                    </div>
                    <div className="product-category">
                        <h4>Categories</h4>
                        <input
                            type="checkbox"
                            value="white"
                            onClick={() => { typeCategory("white") }}
                        />
                        <label>White</label>
                        <br />
                        <input
                            type="checkbox"
                            name="FoldedSleeve"
                            value="folded"
                            onMouseUp={() => { typeCategory("folded") }}
                        />
                        <label>Folded Sleeve</label>
                    </div>
                </div>
                <Card newData={newData} />
            </div>
        </>
    )
}

export default FilterPage;