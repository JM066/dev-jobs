import React, { useCallback, useMemo, useState } from "react";
import { Button } from "@chakra-ui/react";
import {
  BaseEditor,
  createEditor,
  Descendant,
  Editor,
  // Element as SlateElement,
  // Node,
  // Text,
  // Transforms,
} from "slate";
import { Slate, Editable, ReactEditor, withReact, useSlate } from "slate-react";
import { HistoryEditor, withHistory } from "slate-history";

export type ParagraphElement = {
  type: "paragraph";
  children: CustomText[];
};

export type TitleElement = {
  type: "title";
  children: CustomText[];
};

type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;
type CustomElement = ParagraphElement | TitleElement;
type CustomText = { text: string; bold?: boolean };

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];
function TextEditor() {
  const [value] = useState(initialValue);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  return (
    <Slate editor={editor} value={value}>
      <MarkButton format="bold" />
      <MarkButton format="italic" />
      <MarkButton format="underline" />
      <MarkButton format="code" />

      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          // for (const hotkey in HOTKEYS) {
          //   if (isHotkey(hotkey, event as any)) {
          //     event.preventDefault();
          //     const mark = HOTKEYS[hotkey];
          //     toggleMark(editor, mark);
          //   }
          // }
        }}
      />
    </Slate>
  );
}
export default TextEditor;

const isMarkActive = (editor: CustomEditor, format: string) => {
  const marks = Editor.marks(editor);
  return marks ? true : false;
};
const toggleMark = (editor: CustomEditor, format: string) => {
  console.log("editor,", editor);
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }

  // Transforms.setNodes(
  //   editor,
  //   { bold: isActive ? undefined : true },
  //   { match: (n) => Text.isText(n), split: true }
  // );
};

const MarkButton = ({ format }: { format: string }) => {
  const editor = useSlate();
  return (
    <Button
      colorScheme="teal"
      variant="outline"
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      Mark button
    </Button>
  );
};

const Element = ({ attributes, children, element }: any) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};
const Leaf = ({ attributes, children, leaf }: any) => {
  console.log("leaf", leaf);
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.code) {
    children = <code>{children}</code>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  return <span {...attributes}>{children}</span>;
};
