import React ,{useRef, useEffect} from 'react';
import './App.css';
import {useParams, useHistory, Link } from 'react-router-dom'

function Color({ handler, reset }) {
    const { color } = useParams("color")
    let history = useHistory()
    // const body = useRef(document.body)

    handler(color)

    const goBack = () => {
        history.push("/")
    }
  return (
      <>

          <h1>{`This is ${color}`}</h1>
          <h3>{`Is in't it beautiful`}</h3>
          <Link onClick={() => {
              goBack()
              reset()
          }}>Go Back!</Link>

    </>
  );
}

export default Color;
