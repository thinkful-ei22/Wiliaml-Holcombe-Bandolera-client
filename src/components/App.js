import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CodeList from './CodeList';

import RegistrationPage from './registration-form';
//import RegistrationForm from './registration-form';
import LandingPage from './landing-page';
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
                </main>
            </div>
        </Router>
    );
}

