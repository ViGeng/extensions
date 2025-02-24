import { getPreferenceValues } from "@raycast/api";
import OpenAI from "openai";

interface PreferenceValues {
  base_url?: string;
  api_key: string;
  global_model?: string;
  custom_global_model?: string;
}

const preference = getPreferenceValues<PreferenceValues>();

export const openai = new OpenAI({
  baseURL: preference.base_url || "https://api.openai.com/v1",
  apiKey: preference.api_key,
});

const global_model = preference.global_model || preference.custom_global_model || "gpt-4o";
export { global_model };
