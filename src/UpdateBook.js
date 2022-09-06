import React from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

 class UpdateBook extends React.Component{
    render(){
        return(
            <>
            <Modal show={this.props.showUpdate} onHide={this.props.closeUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Update book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    kkkkkk
                    {/* <Form onSubmit={this.props.updateCat}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Cat Name</Form.Label>
                            <Form.Control type="text" placeholder="cat name" name="catName" defaultValue={this.props.currentCat.name}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Cat Breed</Form.Label>
                            <Form.Control type="text" placeholder="cat breed" name="catBreed"  defaultValue={this.props.currentCat.breed}/>
                        </Form.Group> */}
{/* 
                        <Button variant="primary" type="submit">
                            update
                        </Button>

                    </Form> */}
                </Modal.Body>
                
            </Modal>
            </>
        )
    }
 }
 export default UpdateBook