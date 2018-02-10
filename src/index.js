import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import TestPage from './route-components/testpage/TestPage.js';
import Luke from './route-components/Luke/Luke.js'
import Leia from './route-components/Leia/Leia.js';
import Finn from './route-components/Finn/Finn.js';
import Rey from './route-components/Rey/Rey.js';
import Maul from './route-components/Maul/Maul.js';
import Obi from './route-components/Obi-Wan/Obi-Wan.js';

ReactDOM.render(
<Router>
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/TestPage' component={TestPage} />
        <Route path='/Luke' component={Luke} />
        <Route path='/Leia' component={Leia} />
        <Route path='/Finn' component={Finn} />
        <Route path='/Rey' component={Rey} />
        <Route path='/Obi-Wan' component={Obi} />
        <Route path='/Maul' component={Maul} />
        
    </Switch>
</Router>, 
document.getElementById('root'));
