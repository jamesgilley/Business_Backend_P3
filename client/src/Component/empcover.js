import React, { Component} from "react";
import Emputils from "../utils/emputils";



export default class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      };
    }
  
    componentDidMount() {
      fetch('https://randomuser.me/api/?results=1').then((response) => response.json()).then((data) => {
        this.setState({ data });
      });
    }
  
      
  
    render() {
      return <div className="home">
        {this.state.data && <Emputils employees={this.state.data} />}
          
      </div>;
    }
  }
