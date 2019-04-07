import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Home/Home';
import CharactersDetails from './Characters/CharactersDetails';
import Favorite from './Favorite/Favorite';
import Gacha from './Gacha/Gacha';
import Pvp from './PVP/Pvp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/character/:id' component={CharactersDetails} />
            <Route path='/favorite' component={Favorite} />
            <Route path='/gacha' component={Gacha}/>
            <Route path='/pvp' component={Pvp}/>
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
