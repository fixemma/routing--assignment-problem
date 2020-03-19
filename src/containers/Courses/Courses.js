import React, { Component } from 'react';

import './Courses.css';
import { Route } from 'react-router';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseSelectHandle = (id) => {
        this.props.history.push({pathname:'/courses/' + id+ '/' + this.state.courses.find(curs=>curs.id===id).title}) 
    }

    render = () => {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article className="Course" key={course.id} onClick={()=>this.courseSelectHandle(course.id)}>{course.title}</article>;
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:id/:title'} component={Course} />
            </div>
        );
    }
}

export default Courses;