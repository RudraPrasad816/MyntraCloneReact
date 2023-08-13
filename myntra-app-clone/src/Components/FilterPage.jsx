import React, { useState } from 'react';
import Card from "./Card.jsx";
import './ComponentStyles/FilterPage.css';
import data from "../data.js";


const FilterPage = (props) => {

    //taking variables for data of different category
    const [newData, setNewData] = useState(data);

    //function to get data of gender category
    const genderCategory = (e) => {
        if (e.target.value === "all") {
            document.getElementById("product-category").querySelector("input").checked = false
            document.getElementById("product-category").querySelectorAll("input")[1].checked = false
            setNewData(data);
        } else {
            setNewData(data.filter((ele) => {
                return ele.gender === e.target.value;
            }))
        }
    }

    //function to get data of different style category
    const typeCategory = (e) => {
        if (e.target.checked === false) {
            if (e.target.value === "folded") {
                setNewData(newData.filter((ele) => {
                    return ele.folded === "Y";
                }));
            }
            else if (e.target.value === "white") {
                setNewData(newData.filter((ele) => {
                    return ele.link.includes(e.target.value);
                }))
            }
        }
        else {
            document.getElementById("gender-category").querySelector("input").checked = true;
            setNewData(data);
        }
    }

    return (
        <>
            <div className='home'>
                <div className="filterSection">
                    <h4 className='filterheading'>FILTERS:</h4>
                    <div className="gender-category" id='gender-category'>
                        <h4>Gender</h4>
                        <input
                            type="radio"
                            name="gender"
                            value="all"
                            onClick={genderCategory}
                        />
                        <label>ALL</label>
                        <br />
                        <input
                            type="radio"
                            name="gender"
                            value="M"
                            onClick={genderCategory}
                        />
                        <label>MEN</label>
                        <br />
                        <input
                            type="radio"
                            name="gender"
                            value="F"
                            onClick={genderCategory}
                        />
                        <label>WOMEN</label>
                    </div>
                    <div className="product-category" id='product-category'>
                        <h4>Categories</h4>
                        <input
                            type="checkbox"
                            value="white"
                            onMouseUp={typeCategory}
                        />
                        <label>White</label>
                        <br />
                        <input
                            type="checkbox"
                            name="FoldedSleeve"
                            value="folded"
                            onMouseUp={typeCategory}
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