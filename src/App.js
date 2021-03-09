import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ArduinoVacuum from './components/projects/arduinovacuum/ArduinoVacuum';
import ChallengeForChange from './components/projects/challengeforchange/ChallengeForChange';
import EcoSnap from './components/projects/ecosnap/EcoSnap';
import JackStones from './components/projects/jackstones/Jackstones';
import MedExpress from './components/projects/medexpress/MedExpress';
import OrdrUp from './components/projects/ordrup/Ordrup';
import Promptu from './components/projects/promptu/Promptu';
import RadiothonBooth from './components/projects/radiothonbooth/RadiothonBooth';
import RefugeeVRExperience from './components/projects/refugeevrexperience/RefugeeVRExperience';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/arduinovacuum', name: 'Arduino Vacuum', Component: ArduinoVacuum },
  { path: '/challengeforchange', name: 'Challenge For Change', Component: ChallengeForChange },
  { path: '/ecosnap', name: 'EcoSnap', Component: EcoSnap },
  { path: '/jackstones', name: 'Jackstones', Component: JackStones },
  { path: '/medexpress', name: 'Medexpress', Component: MedExpress },
  { path: '/ordrup', name: 'Ordrup', Component: OrdrUp },
  { path: '/promptu', name: 'Promptu', Component: Promptu },
  { path: '/radiothonbooth', name: 'RadiothonBooth', Component: RadiothonBooth },
  { path: '/refugeevrexperience', name: 'RefugeeVRExperience', Component: RefugeeVRExperience },
]

const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0)

    const vendorScript = document.createElement('script')
    const appScript = document.createElement('script')

    vendorScript.src = '../../js/vendor.js'
    vendorScript.async = true
    document.body.appendChild(vendorScript)



    vendorScript.onload = () => {
      appScript.src = '../../js/app.js'
      appScript.async = true
      document.body.appendChild(appScript)
    }
  })

  return (
    <main>
      <Router>
        <Header></Header>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        <Footer />
      </Router>
    </main>
  );
}

export default App;
