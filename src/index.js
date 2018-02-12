import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import TestPage from './route-components/testpage/TestPage.js';
import CharacterPage from './route-components/character-display/Character_Page.js'
import Default from './route-components/character-display/Default';

ReactDOM.render(
<Router>
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/TestPage' component={TestPage} />
        <Route exact path='/Character' component={Default} />
        <Route path='/Character/:name' component={CharacterPage} />        
    </Switch>
</Router>, 
document.getElementById('root'));
