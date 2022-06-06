import React from "react";
import {
  convertFromRaw,
  RawDraftContentState,
  EditorState,
  Editor,
} from "draft-js";

function EditorItem({ text }: { text: RawDraftContentState }) {
  if (text.blocks) {
    return (
      <Editor
        editorState={EditorState.createWithContent(convertFromRaw(text))}
        readOnly={true}
        onChange={() => console.log(text)}
      />
    );
  }
  return <div>{text}</div>;
}

export default EditorItem;
