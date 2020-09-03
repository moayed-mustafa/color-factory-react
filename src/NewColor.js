import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const NewColor = ({ colorsHandler }) => {
    const history = useHistory()
    const initial_state = {
        color: "",
        value: ""
    }
    // make an on change handler for the input fields
    const [formData, setFormData] = useState(initial_state)

    const handleChange = (e) => {
        e.persist()
        // console.log(e.target.name, e.target.value)
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // set the state with the new values
        formData.value === "" ?
            alert('must input a color value')
        :colorsHandler(formData)
        history.push("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color" >Color</label>
            <input name="color" id="color" onChange={handleChange} ></input>
            <label htmlFor="color-picker">Color</label>
            <input type="color" name="value" id="color-picker"  onChange={handleChange} required ></input>
            <button>Submit!</button>
        </form>
    )
}

export default NewColor