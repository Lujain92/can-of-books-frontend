import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios';
import FormModal from './FormModal';
import UpdateBook from './UpdateBook';
import { withAuth0 } from '@auth0/auth0-react'; //1
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      books: [],
      showModal: false,
      showUpdate:false,
      currentBook:{}
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_URL}books`)
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
  handleSubmit=(event)=>{
    event.preventDefault()
    
    const obj={
        title :event.target.title.value,
        description :event.target.description.value,
        status: event.target.status.value
       
    }
    //console.log(obj.title)

    axios
    .post(`${process.env.REACT_APP_URL}books`, obj)
    .then(result =>{
      this.setState({
        books: result.data
      })
     })
     .catch(err=>{
       console.log(err);
     })
     this.handleClose()
 }

 deleteBook=(id)=>{
  axios
  .delete(`${process.env.REACT_APP_URL}books/${id}`)
  .then(result=>{
    this.setState({
      books :result.data
    })

  })
  .catch(err=>{
    console.log(err)})
  

 }
 //update
 showUpdated=(item)=>{
this.setState({
  showUpdate:true,
  currentBook:item //ask about 
})
 }

 closeUpdate=()=>{
  this.setState({
    showUpdate:false
  })
 }
  

 updateOne=(event)=>{
  event.preventDefault()
  let obj={
    title: event.target.title.value,
    description:event.target.description.value,
    status:event.target.status.value
  
  }
  const id=this.state.currentBook._id;
  axios
  .put(`${process.env.REACT_APP_URL}books/${id}`,obj)
  .then(result=>{
    this.setState({
      books :result.data
    })
    this.closeUpdate()

  })
  .catch(err=>{
    console.log(err)
  })

 }
  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <button onClick={this.addBook}>Add new book</button>
        <FormModal showModal={this.state.showModal} handleClose={this.handleClose} handleSubmit={this.handleSubmit}/>
        <UpdateBook showUpdate={this.state.showUpdate} closeUpdate={this.closeUpdate} updateOne={this.updateOne} currentBook={this.state.currentBook}/>


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
                    <p>status : {item.status}</p>
                    <button onClick={()=>this.deleteBook(item._id)}> delete book </button>
                    <button onClick={()=>this.showUpdated(item)}> update book </button>
                  
                  </Carousel.Caption>
                </Carousel.Item>

              )
            }

            ) }


          </Carousel>
        ) : (
          <h3>the book collection is empty.</h3>
        ) }



      </>
    )
  }
}

export default withAuth0(BestBooks); //2
