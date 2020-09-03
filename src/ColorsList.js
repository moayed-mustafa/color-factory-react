import React, { useState }  from 'react';
import { NavLink, BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function ColorsList() {
    // eventually will add a state to hold all the colors
    // so that when a new color is added it is reflected on the state
    //  and then reflectd on the view
    const initialState = ['red', 'green', 'blue']
    const [colors, setColors] = useState(initialState)

    return (
        <>
        <p>Please Select a Color</p>
            <ul className="Colors">
                    {colors.map((color, i)=> (
                        <li key={i}>
                            <NavLink to={`/colors/${color}`}>{color}</NavLink>
                        </li>
                ))}
            </ul>




        </>
    )

}
export default ColorsList;
