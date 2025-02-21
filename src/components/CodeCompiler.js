import React, { useEffect, useState } from "react";
import { codePreviewModal } from "../utils/Modals";

function CodeCompiler({
  question,
  outputValue,
  setYourCode,
  setYourOutput,
  handleClickUser,
  setCode,
  code,
}) {
  const [output, setOutput] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleRunCode = () => {
    try {
      const result = runCodeInContext(code);
      setOutput(result);
      setYourOutput(result);
      handleClickUser();
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const runCodeInContext = (code) => {
    const context = {};
    const log = (message) => context.consoleOutput.push(message);
    context.consoleOutput = [];
    const wrappedCode = `
          (function() {
            const console = { log: ${log.toString()} };
            ${code}
          })();
        `;
    eval(wrappedCode);
    return context.consoleOutput.join("\n");
  };

  useEffect(() => {
    if (code?.length === 0) {
      setOutput("");
    }
  }, [code]);
  return (
    <div className="code-main-section">
      <div className="inside-code">
        <div className="codding-input-box-section">
          <textarea
            rows="8"
            cols="65"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setYourCode(e.target.value);
            }}
            placeholder="Type your JavaScript code here..."
            className="coding-box"
          />
        </div>
        <div className="coding-out-section">
          {/* <span className="grey-color">
            Only run Code for Console.log() example : console.log(add(2,3))
          </span> */}
          <div className="grey-color mt-2 sm-fw sm">Example Input:</div>
          <div className="xs md-fw mt-2 mb-2">{question}</div>
          <div className="grey-color mt-2 sm-fw sm">Excepted Output:</div>
          <div className="xl lg-fw output-text">{outputValue}</div>
          <div>
            <div>{codePreviewModal(show, handleClose, handleShow)}</div>
          </div>
        </div>
      </div>

      {code?.length > 0 ? (
        <>
          <button onClick={handleRunCode} className="run-btn mt-3">
            Run Code
          </button>
        </>
      ) : (
        <>
          <button className="run-btn-disabled mt-3">Run Code</button>
        </>
      )}
      <div className="xs mt-3">Output:</div>
      {code?.length > 0 && (
        <div className="xs output-text lg-fw md mt-2">{output}</div>
      )}
    </div>
  );
}

export default CodeCompiler;
