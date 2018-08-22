import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CodeList from './CodeList';

import RegistrationPage from './registration-page';
//import RegistrationForm from './registration-form';
import LandingPage from './landing-page';
import NewTopic from './new-topic-page'
{/* <header>
<h1><Link to="/"></Link></h1>
</header> */}

//

export default function App() {
    return (
        <Router>
            <div className="app">
              
                <main>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/topics" component={CodeList} />
                    <Route exact path="/register" component={RegistrationPage} />
                    <Route exact path="/topics/newTopic" component={NewTopic} />
                </main>
            </div>
        </Router>
    );
}

