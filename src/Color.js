import React ,{useRef, useEffect} from 'react';
import './App.css';
import {useParams, useHistory, Link } from 'react-router-dom'

function Color({colors, handler, reset }) {
    const { color } = useParams("color")
    let history = useHistory()
    // get color value
    let value = colors.filter(color_object => (color_object.color === color)).find(found => found.value)

    const goBack = () => {
        history.push("/")
    }

    value=== undefined? goBack(): handler(value.value)

  return (
      <>

          <h1>{`This is ${color}`}</h1>
          <h3>{`Is in't it beautiful`}</h3>
          <Link
              to=""
              onClick={() => {
              goBack()
              reset()
          }}>Go Back!</Link>

    </>
  );
}

export default Color;
