import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
const BLOCK_TYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" },
  { label: "Blockquote", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "Code Block", style: "code-block" },
];

function TextEditor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const editorRef = React.useRef<any>(null);

  function focusEditor() {
    if (editorRef.current !== null) {
      editorRef?.current?.focus();
    }
  }

  React.useEffect(() => {
    focusEditor();
  }, []);

  const onBlockClick = (style: string) => {
    const nextState = RichUtils.toggleBlockType(editorState, style);
    console.log("nextState", nextState);
    setEditorState(nextState);
  };

  interface Props {
    key: string;
    label: string;
    onToggle: (style: string) => void;
    style: string;
  }
  const StyleButton = ({ label, style, onToggle }: Props) => {
    return <button onClick={() => onToggle(style)}>{label}</button>;
  };
  return (
    <div onClick={focusEditor}>
      <div>
        {BLOCK_TYPES.map((type) => (
          <StyleButton
            key={type.label}
            label={type.label}
            onToggle={onBlockClick}
            style={type.style}
          />
        ))}
      </div>
      <Editor
        ref={(editor: any) => (editorRef.current = editor)}
        editorState={editorState}
        onChange={(editorState) => setEditorState(editorState)}
      />
    </div>
  );
}

export default TextEditor;
