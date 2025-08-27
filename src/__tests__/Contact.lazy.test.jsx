import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Route } from "../routes/contact.lazy";

const queryClient = new QueryClient();

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

test("can submit contact form", async () => {
  fetchMocker.mockResponse(JSON.stringify({ status: "ok" }));
  const screen = render(
    <QueryClientProvider client={queryClient}>
      <Route.options.component />
    </QueryClientProvider>,
  );

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const messageTextArea = screen.getByPlaceholderText("Message");

  const testData = {
    name: "Uttam",
    email: "kmk@example.com",
    message: "just study hard as much u can!",
  };

  nameInput.value = testData.name;
  emailInput.value = testData.email;
  messageTextArea.value = testData.message;

  const btn = screen.getByRole("button");
  btn.click();
});
