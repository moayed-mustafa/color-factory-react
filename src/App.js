import React ,{useRef, useEffect, useState}  from 'react';
import './App.css';
import { NavLink, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ColorsList from './ColorsList'
import Color from './Color'

function App() {
  // get a refrence of the body element
  const body = useRef(document.body)
  // set a state with color white
  const [color, setColor] = useState("white")
  // a handler to send down to the Color component to change the background color of the body, also changes the state
  const changeColor = (color) => {
    setColor(color)
    body.current.style.backgroundColor = color;
  }
  // another hander to reset the state to white, activated when clicked on the back button
  const resetColor = () => {
    setColor("white")
  }
  // a use effect hook to reflect the state change on the view.
  useEffect(() => {
    body.current.style.backgroundColor = color;
  }, [color])
  return (
    <>
    <Router>
      <Switch>

        <Route exact path="/">
          <div className="welcome">
            <h1>Welcome to color factory</h1>
              <NavLink to="color/new">Add a color</NavLink>
            </div>
            <ColorsList />
        </Route>
        <Route exact path ="/colors/:color">
            <Color handler={changeColor} reset={resetColor}/>
                </Route>
          </Switch>
      </Router>
      </>
  );
}

export default App;
