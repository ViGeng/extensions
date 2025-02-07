import { getPreferenceValues } from "@raycast/api";
import ResultView from "./common";

const prompt = getPreferenceValues().prompt_roleplay_on;
const model_override = getPreferenceValues().model_roleplay_on;
const toast_title = "Answering on the selected text...";

export default function AskOn(props: { arguments: { system_prompt: string; user_prompt: string } }) {
  return ResultView(
    prompt,
    model_override,
    toast_title,
    true,
    props.arguments.system_prompt + props.arguments.user_prompt
  );
}
