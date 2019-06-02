import React, {Component} from 'react';
import Header from './components/header';
import About from './components/about';
import Problem from './components/problem';
import Solution from './components/solution';
import OurProduct from './components/ourproduct';
export default class App extends Component{
    render(){
        return(
        <React.Fragment>
            <Header/>
            <About/>
            <Problem/>
            <Solution />
            <OurProduct />
        </React.Fragment>)
    }
}