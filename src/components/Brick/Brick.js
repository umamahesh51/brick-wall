import React from 'react';
import './styles.css'

class Brick extends React.Component{
    constructor(props) {
        super(props);
        this.state = { name : ""}
    }
    render(){
        return(
        <div className = "brick-container" >{this.props.name}</div>
        );
    }
}
export default Brick;