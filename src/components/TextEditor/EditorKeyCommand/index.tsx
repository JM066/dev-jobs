import { getDefaultKeyBinding, KeyBindingUtil } from "draft-js";
const { hasCommandModifier } = KeyBindingUtil;

type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;
function myKeyBindingFn(e: SyntheticKeyboardEvent): string | null {
  if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
    return "myeditor-save";
  }
  return getDefaultKeyBinding(e);
}
