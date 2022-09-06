import React from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class UpdateBook extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.showUpdate} onHide={this.props.closeUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={this.props.updateOne}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>title</Form.Label>
                                <Form.Control type="text" placeholder="title" name="title" defaultValue={this.props.currentBook.title} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>description</Form.Label>
                                <Form.Control type="text" placeholder="description" name="description" defaultValue={this.props.currentBook.description} />
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
                                update
                            </Button>

                        </Form>
                    </Modal.Body>

                </Modal>
            </>
        )
    }
}
export default UpdateBook