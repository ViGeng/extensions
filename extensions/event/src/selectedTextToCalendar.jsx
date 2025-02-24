import { Detail } from "@raycast/api";
import { useEffect, useState } from "react";
import { callOpenAI } from "./api/call";


export default function selectedTextToCalendar(props) {
  const [markdown, setMarkdown] = useState("Loading...");

  useEffect(() => {
    async function fetchResponse() {
      try {
        const rsp = await callOpenAI("hello");
        setMarkdown(rsp);
      } catch (error) {
        setMarkdown(`### Error\n\n${error.message}`);
      }
    }
    
    fetchResponse();
  }, []);

  return <Detail markdown={markdown} navigationTitle="AI Response" />;
}