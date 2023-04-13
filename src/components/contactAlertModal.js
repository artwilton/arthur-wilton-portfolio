import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CheckCircle, ExclamationCircle } from "../content/icons/generic";

const ContactAlertModal = ({ onHide, show, success, title, body }) => {
  
  const renderIcon = (SuccessIcon, ErrorIcon) => {
    let Icon;
    let className = "pb-3";
    if (success) {
      Icon = SuccessIcon
      className = `contact-alert-modal__icon--success ${className}`;
    } else {
      Icon = ErrorIcon
      className = `contact-alert-modal__icon--error ${className}`;
    }
    return <Icon className={className} />;
  };

  return (
    <Modal
      onHide={onHide}
      show={show}
      contentClassName="bg--light border-0 text-center"
      aria-label={title}
      centered
    >
      <Modal.Header className="border-0" closeButton></Modal.Header>
      <Modal.Body className="border-0 mt-n4 px-4">
        {renderIcon(CheckCircle, ExclamationCircle)}
        <h4 className="contact-alert-modal__header pb-1 pb-md-3">{title}</h4>
        <p className="contact-alert-modal__body">{body}</p>
      </Modal.Body>
      <Modal.Footer className="border-0 pb-3">
        <Button variant="dark" className="border-0 mx-auto" onClick={onHide}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactAlertModal;
