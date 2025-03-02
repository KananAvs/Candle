import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import useCart from '../../hooks/useCart';
import { formatName, validateName, sanitizeName } from '../../utils/nameUtils';

const EditNameModal = ({ show, onHide }) => {
  const { customerName, setCustomerName } = useCart();
  const [nameInput, setNameInput] = useState(customerName || '');
  const [nameError, setNameError] = useState('');

  const handleNameChange = (e) => {
    const value = e.target.value;
    
    if (value.length <= 20) {
      setNameInput(value);
      
      if (!validateName(value)) {
        setNameError('Please use only letters, spaces, hyphens, and apostrophes');
      } else {
        setNameError('');
      }
    }
  };

  const handleSaveName = () => {
    if (nameInput.trim() === '') {
      setCustomerName('');
      onHide();
      return;
    }

    if (!validateName(nameInput)) {
      setNameError('Please use only letters, spaces, hyphens, and apostrophes');
      return;
    }

    const sanitizedName = sanitizeName(nameInput);
    const formattedName = formatName(sanitizedName);
    setCustomerName(formattedName);
    onHide();
  };

  const handleDeleteName = () => {
    setCustomerName('');
    onHide();
  };

  const handleClose = () => {
    setNameInput(customerName || '');
    setNameError('');
    onHide();
  };

return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Your Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Add your name to personalize your shopping experience.</p>
            <Form>
                <Form.Group>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={nameInput}
                        onChange={handleNameChange}
                        placeholder="Enter your name"
                        maxLength={20}
                        isInvalid={!!nameError}
                    />
                    <Form.Control.Feedback type="invalid">
                        {nameError}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        Maximum 20 characters
                    </Form.Text>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
            <div>
                {customerName && (
                    <Button variant="danger" onClick={handleDeleteName}>
                        Delete Name
                    </Button>
                )}
            </div>
            <div>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button 
                    variant="primary" 
                    onClick={handleSaveName}
                    disabled={!!nameError}
                    className="ms-2"
                >
                    Save
                </Button>
            </div>
        </Modal.Footer>
    </Modal>
);
};

EditNameModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default EditNameModal;