import React ,{useRef, useEffect, useState}  from 'react';
import './App.css';
import { NavLink, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ColorsList from './ColorsList'
import Color from './Color'
import NewColor from './NewColor'

function App() {
  // colors state
  const initialState = [
    {color: "red",value: "#FF0000",},
    {color: "blue",value: "#0000FF",},
    {color: "green",value: "#00FF00",}
    ]
  const [colors, setColors] = useState(initialState)

  //todo make a function here to add to the colors state and send it to the add new color component as a prop
  const updateColorsState = ({color, value}) => {
    setColors(colors => ([...colors, {color:color, value: value}])
    )
  }

  // get a refrence of the body element
  const body = useRef(document.body)
  // set a state with color white
  const [color, setColor] = useState("#FFFFFF")
  // a handler to send down to the Color component to change the background color of the body
  const changeColor = (color) => {
    setColor(color)
  }
  // another hander to reset the state to white, activated when clicked on the back button
  const resetColor = () => {
    setColor(color => color= "#FFFFFF")
    body.current.style.backgroundColor = color
  }
  useEffect(() => {
    setColors(colors => colors = JSON.parse(localStorage.getItem('colors')))
  },[])
  // a use effect hook to reflect the state change on the view. and to set the state to localStorage
  useEffect(() => {
    body.current.style.backgroundColor = color;
    localStorage.setItem('colors',JSON.stringify(colors))
  }, [color,colors])
  // useEffect(() => {

  // }, [colors])
  return (
    <>
    <Router>
      <Switch>

          <Route exact path="/">
              <div className="welcome">
                <h1>Welcome to color factory</h1>
                  <NavLink to="colors/new">Add a color</NavLink>
                </div>
                <ColorsList colors={colors} />
            </Route>
              <Route exact path ="/colors/new">
            <NewColor colorsHandler={updateColorsState}/>
          </Route>
          <Route exact path ="/colors/:color">
              <Color colors={colors} handler={changeColor} reset={resetColor}/>
          </Route>

        </Switch>

      </Router>
      </>
  );
}

export default App;
