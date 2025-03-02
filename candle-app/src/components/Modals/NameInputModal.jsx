import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NameInputModal = ({ show, onHide, onSubmit, name, onNameChange }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Tell Us Your Name</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        We'd love to personalize your experience. Please enter your name below (this is optional):
      </p>
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Your name"
      />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Continue without Name
      </Button>
      <Button
        variant="primary"
        onClick={onSubmit}
        disabled={!name.trim()}
      >
        Submit Name
      </Button>
    </Modal.Footer>
  </Modal>
);

NameInputModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
};

export default NameInputModal;
