import React, { Component } from 'react'
import Book from './Book'

export default class AddForm extends Component {

    constructor() {
        super()

        this.state = {
            books: [],

            title: '',
            author: '',
            year: '',
        }

        // this.titleChangeHandler = this.titleChangeHandler.bind(this)

    }

    submitHandler(event){
        event.preventDefault()

        this.setState({
            books: {
                title: this.state.title,
                author: this.state.author,
                year: this.state.year
            }
        })
        
    }

    titleChangeHandler(event){
        this.setState({
            title: event.target.value
        })
    }

    authorChangeHandler(event){
        this.setState({
            author: event.target.value
        })
    }

    yearChangeHandler(event){
        this.setState({
            year: event.target.value
        })
    }


    render() {
        return (
            <>
                <form id="book-form" autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" className="form-control" onChange={(event)=>this.titleChangeHandler(event)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" className="form-control" onChange={(event)=>this.authorChangeHandler(event)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input type="number" id="year" className="form-control" onChange={(event)=>this.yearChangeHandler(event)} />
                    </div>
                    <input type="submit" value="Add Book" onClick={(event) => this.submitHandler(event)} className="btn btn-warning btn-block add-btn" />
                </form>
                <table className="table table-striped mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">
                        <Book />
                    </tbody>
                </table>


            </>
        )
    }
}
