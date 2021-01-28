import { Editor, EditorState,RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { createContext, CSSProperties, useState, useRef } from "react";

// clip: "rect(50px 400px 200px 100px)"
export default function MyTextEditor() {
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
    );
    function handleKeyCommand(command) {
      const newState = RichUtils.handleKeyCommand(editorState, command);
  
      if (newState) {
        setEditorState(newState);
        return "handled";
      }
  
      return "not-handled";
    }
  
    function _onBoldClick() {
      setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    }
    return (
      <div className="myTextEditorContainer">
        <button onClick={_onBoldClick}>Bold</button>
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </div>
     
    );
  }