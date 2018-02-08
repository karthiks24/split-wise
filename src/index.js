import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabsExampleSimple from './App.jsx';
import { Table, Badge, Menu, Dropdown, Icon } from 'antd';


const App1 = () => (

    <MuiThemeProvider>
        <TabsExampleSimple/>
    </MuiThemeProvider>

);


ReactDOM.render(<App1/>, document.getElementById('root'));
registerServiceWorker();
