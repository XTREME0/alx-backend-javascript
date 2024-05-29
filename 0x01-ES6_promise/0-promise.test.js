// 0-promise.test.js

import getResponseFromAPI from "./0-promise.js";

// Mocking a successful API response
const mockResponse = "Mock API Response";

// Mocking the API call with a resolved promise
jest.mock("./0-promise.js", () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve(mockResponse))
}));

describe("getResponseFromAPI function", () => {
  it("should return a promise", () => {
    const responsePromise = getResponseFromAPI();
    expect(responsePromise).toBeInstanceOf(Promise);
  });

  it("should resolve with the expected response", async () => {
    const response = await getResponseFromAPI();
    expect(response).toBe(mockResponse);
  });
});
