import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class AddNewModal extends Component {
  constructor(props) {
    super(props);
    this.state = { newVisitor: { is_signout: false, signout_date: "" } };
  }

  handleChange = e => {
    let { name, value } = e.target;
    const newVisitor = { ...this.state.newVisitor, [name]: value };
    this.setState({ newVisitor });
  };

  render() {
    const { toggle, handleSubmit } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle} className="header-color">
          Add New Visitor
        </ModalHeader>
        <ModalBody>
          {/* <form> */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              placeholder="Enter Name"
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="name">Notes</label>
            <input
              type="text"
              name="notes"
              onChange={this.handleChange}
              placeholder="Enter notes"
              className="form-control"
            ></input>
          </div>
          {/* </form> */}
        </ModalBody>
        <ModalFooter>
          <Button
            className="float-right"
            color="info"
            onClick={() => handleSubmit(this.state.newVisitor)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
