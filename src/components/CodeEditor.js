import React, { useState } from "react";
import Editor, { OnChange } from "@monaco-editor/react";

function CodeEditor({ language, onChange, code }) {
  const [codeValue, setCodeValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setCodeValue(value);
    onChange("code", value);
  };

  return (
    <Editor
      height="85vh"
      width="100%"
      value={codeValue}
      language={language || "javascript"}
      defaultValue="// add your code here"
      onChange={handleEditorChange}
    />
  );
}

export default CodeEditor;
