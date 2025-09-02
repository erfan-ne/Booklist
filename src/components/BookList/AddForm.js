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

    }

    submitHandler(event){
        event.preventDefault()

        let {title, author, year} = this.state

        if(title , author, year){
            if (!/^\d{4}$/.test(year)) {
                alert("Year must be a 4-digit number")
                return
            }


            this.setState((prevState)=>({
                books: [
                    ...prevState.books,
                    {
                    id: this.state.books.length + 1,
                    title,
                    author,
                    year
                    }
                ],

                title:'',
                author:'',
                year:''
            }))
        } else {
            alert("please complete the form")
        }

        
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
                        <input type="text" id="title" className="form-control" value={this.state.title} onChange={(event)=>this.titleChangeHandler(event)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" className="form-control" value={this.state.author} onChange={(event)=>this.authorChangeHandler(event)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input type="number" id="year" className="form-control" value={this.state.year} onChange={(event)=>this.yearChangeHandler(event)} />
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
                        {this.state.books.map((book) =>(
                            <Book 
                                key={book.id}
                                title={book.title}
                                author={book.author}
                                year={book.year}
                            />
                        ))}
                        
                    </tbody>
                </table>


            </>
        )
    }
}
