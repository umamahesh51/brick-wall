import React from 'react';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], images: []};
    }

    render() {
        return (
            <div> 
            <h3>TODO</h3>
             </div>
        );
    }
}

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name : ",", cost : 0.0};
    }
}
export default  TodoList;