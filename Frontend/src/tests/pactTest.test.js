/* eslint-disable */
import { Pact } from "@pact-foundation/pact";
import path from "path";
import axios from "axios";

describe("pact tests", () => {
  const provider = new Pact({
    cors: true,
    port: 3006,
    host: "localhost",
    log: path.resolve(process.cwd(), "logs", "pact.log"),
    dir: path.resolve(process.cwd(), "pacts"),
    consumer: "FrontEnd",
    provider: "BackEnd",
  });

  describe("when a call to the API is made", () => {
    beforeEach(async () => {
      return await provider.setup().then(() =>
        provider.addInteraction({
          state: "users",
          uponReceiving: "a request for users",
          withRequest: {
            path: "/users",
            method: "GET",
          },
          willRespondWith: {
            body: [
              {
                name: "arek",
                id: 1,
                description: "contract tests",
              },
              {
                name: "marek",
                id: 2,
                description: "contract tests 2",
              },
              {
                name: "bartek",
                id: 3,
                description: "contract tests 3",
              },
            ],
            status: 200,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
          },
        })
      );
    });
    afterAll(() => {
      provider.finalize();
    });
    it("should response with users", async () => {
      const data = await axios
        .get(provider.mockService.baseUrl + "/users")
        .then((res) => res?.data);
      return expect(data).toStrictEqual([
        {
          name: "arek",
          id: 1,
          description: "contract tests",
        },
        {
          name: "marek",
          id: 2,
          description: "contract tests 2",
        },
        {
          name: "bartek",
          id: 3,
          description: "contract tests 3",
        },
      ]);
    });
  });
});
