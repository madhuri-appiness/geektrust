import React, { Component } from 'react';
import Planets from './components/planets';
import 'antd/dist/antd.css';
import "react-toastify/dist/ReactToastify.css";


class App extends Component {
    render() { 
        return (
           <Planets/>
        );
    }
}


export default App;
