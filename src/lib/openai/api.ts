import API from "../axios-client";

export const getChatResponseForLandingPage = async (message: string) =>
  await API.post("/openai/ai-response/landing", { message });
