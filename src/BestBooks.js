import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios';
import FormModal from './FormModal';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
      .get("http://localhost:3001/books")
      .then(result => {
        console.log(result.data);
        this.setState({
          books: result.data
        })
      }

      )
  }

  addBook =(event)=>{
    event.preventDefault();
    this.setState({
      showModal:true
    })

    

  }

  handleClose=()=>{
    this.setState({
      showModal:false
    })
  }
  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <button onClick={this.addBook}>Add new book</button>
        <FormModal showModal={this.state.showModal} handleClose={this.state.handleClose} />


        {this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map(item => {
              return (

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images6.fanpop.com/image/photos/35600000/Puppy-dogs-35608642-2048-1365.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3> title {item.title}</h3>
                    <p>description: {item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>

              )
            }
            )}


          </Carousel>
        ) : (
          <h3>the book collection is empty.</h3>
        )}



      </>
    )
  }
}

export default BestBooks;
