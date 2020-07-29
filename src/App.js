import React from 'react';
import './App.scss';

import {
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';

import Services from './components/Services';
import Tools from './components/Tools';

function App() {
  return (
    <div id="react-main-app">
      <div className="container">
        <h1>
          <img src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 614 244'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23e00;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ELogo-Red_Hat-Fuse-A-Standard-RGB%3C/title%3E%3Cpath d='M227.65,145.74h53.77v9.56H238.57v22.37h28.29V187H238.57v31.51H227.65Z'/%3E%3Cpath d='M296.19,197c0,8.32,5.09,13.52,13.1,13.52a14.87,14.87,0,0,0,13-7v-38h10.4v52.94h-10.4v-5.31a21.63,21.63,0,0,1-15.91,6.35c-12.17,0-20.59-8.53-20.59-20.8V165.6h10.4Z'/%3E%3Cpath d='M345.59,204.81c5.51,4.37,11.33,6.66,17.26,6.66,7.49,0,12.69-3.23,12.69-7.91,0-3.74-2.71-5.93-8.53-6.76l-9.57-1.35c-10.5-1.56-15.81-6.45-15.81-14.66,0-9.57,8.32-16,20.7-16a36.26,36.26,0,0,1,21.32,6.76l-5.3,6.86c-5.83-3.85-11.13-5.51-16.75-5.51-6.34,0-10.6,2.91-10.6,7.18,0,3.85,2.49,5.72,8.73,6.65l9.57,1.36c10.5,1.56,16,6.55,16,14.76,0,9.47-9.57,16.64-22.16,16.64-9.15,0-17.37-2.7-23.19-7.8Z'/%3E%3Cpath d='M419.22,219.47c-15.6,0-27.77-12-27.77-27.45,0-15.29,11.65-27.25,26.52-27.25,14.56,0,25.58,12.06,25.58,27.66v3h-41.8a17.84,17.84,0,0,0,17.88,15.18A20.56,20.56,0,0,0,433.05,206l6.66,6.56A31.61,31.61,0,0,1,419.22,219.47Zm-17.37-31.82h31.41c-1.56-8.11-7.8-14.15-15.5-14.15C409.75,173.5,403.41,179.23,401.85,187.65Z'/%3E%3Cpath class='cls-1' d='M128,84c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C125.39,9.19,104.26,1,98,1c-5.82,0-7.55,7.54-14.45,7.54-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,43,44.54C43,53.76,79.33,84,128,84m32.55-11.42c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C79,104.47,38.08,77.1,38.08,59a18.45,18.45,0,0,1,1.51-7.33C22.77,52.52,1,55.54,1,74.72,1,106.2,75.59,145,134.65,145c45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78'/%3E%3Cpath d='M160.52,72.57c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C79,104.47,38.08,77.1,38.08,59a18.45,18.45,0,0,1,1.51-7.33l3.66-9.06A6.43,6.43,0,0,0,43,44.54C43,53.76,79.33,84,128,84c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42Z'/%3E%3Cpath d='M580.24,93.3c0,11.89,7.15,17.67,20.19,17.67a52.11,52.11,0,0,0,11.89-1.68V95.51a24.84,24.84,0,0,1-7.68,1.16c-5.37,0-7.36-1.68-7.36-6.73V68.8h15.56V54.6H597.28v-18l-17,3.68V54.6H569V68.8h11.25Zm-53,.32c0-3.68,3.69-5.47,9.26-5.47a43.12,43.12,0,0,1,10.1,1.26v7.15A21.51,21.51,0,0,1,536,99.19c-5.46,0-8.73-2.1-8.73-5.57m5.2,17.56c6,0,10.84-1.26,15.36-4.31v3.37h16.82V74.58c0-13.56-9.14-21-24.39-21-8.52,0-16.94,2-26,6.1l6.1,12.52c6.52-2.74,12-4.42,16.83-4.42,7,0,10.62,2.73,10.62,8.31v2.73a49.53,49.53,0,0,0-12.62-1.58c-14.31,0-22.93,6-22.93,16.73,0,9.78,7.78,17.24,20.19,17.24m-92.44-.94h18.09V81.42h30.29v28.82h18.09V36.62H488.43V64.91H458.14V36.62H440.05ZM371.12,82.37c0-8,6.31-14.1,14.62-14.1a17.22,17.22,0,0,1,11.78,4.32V92a16.36,16.36,0,0,1-11.78,4.42c-8.2,0-14.62-6.1-14.62-14.09m26.61,27.87h16.83V32.94l-17,3.68V57.55a28.3,28.3,0,0,0-14.2-3.68c-16.19,0-28.92,12.51-28.92,28.5A28.25,28.25,0,0,0,382.8,111a25.12,25.12,0,0,0,14.93-4.83Zm-77.19-42.7c5.36,0,9.88,3.47,11.67,8.83H309c1.68-5.57,5.89-8.83,11.57-8.83M291.83,82.47c0,16.2,13.25,28.82,30.28,28.82,9.36,0,16.2-2.53,23.25-8.42l-11.26-10c-2.63,2.74-6.52,4.21-11.14,4.21a14.39,14.39,0,0,1-13.68-8.83h39.65V84.05c0-17.67-11.88-30.39-28.08-30.39a28.57,28.57,0,0,0-29,28.81M262.49,52.08c6,0,9.36,3.78,9.36,8.31s-3.37,8.31-9.36,8.31H244.61V52.08Zm-36,58.16h18.09V83.42h13.77l13.89,26.82h20.19l-16.2-29.45a22.27,22.27,0,0,0,13.88-20.72c0-13.25-10.41-23.45-26-23.45H226.52Z'/%3E%3C/svg%3E"
          width="150" height="50" alt="React logo"/>
            Red Hat Fuse
          </h1>
        <hr/>
        <p>
          This is the Red Hat Fuse project.
          It is a separate repository on <a href="https://github.com/christiemolloy/single-spa-react-app">Github</a>
        </p>
        <p>
          You can navigate within the Red Hat Fuse app below:
        </p>
        <nav id="links">
          <NavLink to="/" activeClassName="active" exact="true">Services</NavLink>
          <NavLink to="/tools" activeClassName="active" exact="true">Tools</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Services} />
          <Route path="/tools" component={Tools} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
