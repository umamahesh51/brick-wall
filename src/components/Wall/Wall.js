import React from 'react';
import './style.css'
import Brick from '../Brick/Brick.js';
class Wall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bricks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
        }
    }
    addOneMoreBrick = () => {
        this.setState({
            bricks : [...this.state.bricks, this.state.bricks.length+1]
        })
    }
    render() {
        return (
            <div className="wall-container">
                {
                    this.state.bricks.map((brick) => {
                        return <Brick key={brick} name={brick}></Brick>
                    })
                }

                <button className = "btn" onClick={this.addOneMoreBrick}> Add More</button>
            </div>
        )
    }

    
}
export default Wall;