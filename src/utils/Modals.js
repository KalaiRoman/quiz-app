import Modal from "react-bootstrap/Modal";
import InputTextArea from "./InputTextArea";

const feedBackModal = (show, handleClose, handleShow) => {
  return (
    <>
      <button onClick={handleShow} className="home-btn">
        Feed Back
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Feed Back</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Feedback <span className="text-danger">*</span></label>
            <div className="mt-2">
              <InputTextArea/>
            </div>
          </div>
        </Modal.Body>
        <>
          <div className="d-flex align-items-center flex-column mb-3">
            <div className="d-flex gap-3 mb-3 mt-3">
              <button className="result-btn" onClick={handleClose}>
                Close
              </button>
              <button className="home-btn">Submit</button>
            </div>
            {/* <div>or</div>
            <div className="d-flex gap-3">
              <button className="result-btn">Result</button>
              <button className="home-btn">Home</button>
            </div> */}
          </div>
        </>
      </Modal>
    </>
  );
};

export { feedBackModal };
