import React, { useState, useEffect } from "react";
import { FormControl } from "@chakra-ui/react";
import { RegisterOptions, useController } from "react-hook-form";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import InlineStyleControls from "./InlineStyleControls";
interface ITextEditor {
  placeholder: string;
  register: Omit<Partial<RegisterOptions>, "pattern">;
  control: any;
  name: string;
}
function TextEditor({ placeholder, name, register, control }: ITextEditor) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editor, setEditor] = React.useState<Editor | null>(null);
  const { field } = useController({
    name,
    control,
    defaultValue: placeholder,
  });
  useEffect(() => {
    editor?.focus();
  }, [editor]);

  const onBlockClick = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };
  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };
  const handleEditorState = (editorState: EditorState) => {
    const contentState = editorState.getCurrentContent();
    console.log("content", convertToRaw(contentState));
    field.onChange(contentState);
    setEditorState(editorState);
  };

  return (
    <FormControl required={true}>
      <InlineStyleControls onToggle={onBlockClick} />
      <Editor
        ref={(editor) => setEditor(editor)}
        placeholder={placeholder}
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={(editorState) => handleEditorState(editorState)}
      />
    </FormControl>
  );
}

export default TextEditor;
