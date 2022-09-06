import React from "react";
// import axios from "axios";
import {Modal,Button,Form} from "react-bootstrap";

class FormModal extends React.Component{


    render(){
        return(
            <>
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>xx</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book name </Form.Label>
            <Form.Control type="text" placeholder="book name" name="title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>description </Form.Label>
            <Form.Control type="text" placeholder="description" name="description" />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label htmlFor="status">
              status
            </Form.Label>
            <Form.Select id="status">
              <option value="life changing">life changing</option>
              <option value="favorite five">favorite five</option>
              <option value="reccommend to me">reccommend to me</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
            </>
        )
    }
}

export default FormModal