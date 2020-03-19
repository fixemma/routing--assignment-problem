import React, { Component } from 'react';

class Course extends Component {

    state = {
        id:null,
        title: null
    }

    constructor(props)
    {
        super(props)
    }

    componentDidMount = () => {
        this.loadData();
    }

    componentDidUpdate = () => {
        this.loadData();
    }

    loadData = () => {
        if(this.props.match.params.id && this.props.match.params.title){
            const {id,title} = this.props.match.params;
            if(id != this.state.id || title != this.state.title){
                this.setState({
                    id,
                    title
                })
            }
            
        }
    }


    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;