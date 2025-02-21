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
            <label>
              Feedback <span className="text-danger">*</span>
            </label>
            <div className="mt-2">
              <InputTextArea />
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

// code preview modal
const codePreviewModal = (show, handleClose, handleShow) => {
  const codeString = `
  function add(a, b)
  {
    return a + b;
  }
`;

  const RunCode = `
 console.log(add(2, 3))
`;
  return (
    <>
      <button className="preview-btns mt-3" onClick={handleShow}>
        Preview code
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Code Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-2">{codeString}</div>
          <div className="mt-2">{RunCode}</div>

          <div className="mt-4 lg-fw md">Output:</div>

          <div className="mt-2 xl lg-fw output-text">5</div>
        </Modal.Body>
        <>
          {/* <div className="d-flex align-items-center flex-column mb-3">
            <div className="d-flex gap-3 mb-3 mt-3">
              <button className="result-btn" onClick={handleClose}>
                Close
              </button>
              <button className="home-btn">Submit</button>
            </div>
          </div> */}
        </>
      </Modal>
    </>
  );
};

const submitModal = (show, handleClose, handleShow) => {
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary">Understood</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export { feedBackModal, codePreviewModal };
