import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from './components/Context/indexContext';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
  state = {
    notes: ["Hello one", "Hello two"]
  }

  render() {
    const { notes } = this.state;
    return (
      <Provider value={{
        notes: notes
      }}>
         <div className="site">
        {/*The BrowserRouter allows me to create an url for each component of the App. I create a basename
        based on the github subpages. */}
        <BrowserRouter>
        {/* Switch goes through each Route looking for the specific path. If the first one isn't, it checks the
        second one, etc. The default case is the one without path. */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>

        </BrowserRouter>
      </div>
      </Provider>
    );
  }
}

export default App;