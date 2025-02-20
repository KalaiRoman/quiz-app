import React, { useState } from "react";

function CodeCompiler() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleRunCode = () => {
    try {
      const result = runCodeInContext(code);
      setOutput(result);
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
  return (
    <div>
      <textarea
        rows="10"
        cols="50"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Type your JavaScript code here..."
      />
      <br />
      <button onClick={handleRunCode}>Run Code</button>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
}

export default CodeCompiler;
