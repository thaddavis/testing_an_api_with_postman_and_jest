import { describe, expect, test, beforeAll } from "@jest/globals";
import axios, { AxiosRequestConfig } from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";

const jar = new CookieJar();
const client = wrapper(axios.create({ jar }));

const API_HOST = `http://localhost:8080`;

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

describe("Authentication Flow 1", () => {
  beforeAll(async () => {
    await sleep(1500);
  });

  test("Sign Up", async () => {
    try {
      const data = JSON.stringify({
        email: "t@t.com",
        password: "123",
        name: "tad",
      });

      const config: AxiosRequestConfig = {
        method: "post",
        url: `${API_HOST}/auth-api/sign-up`,
        headers: {
          "Content-Type": "application/json",
        },
        data,
      };

      const response = await client(config);
      expect(response.status).toBe(200);
    } catch (e) {
      expect(e).toBeFalsy();
    }
  });

  test("Sign In", async () => {
    try {
      const data = JSON.stringify({
        email: "t@t.com",
        password: "123",
      });

      const config: AxiosRequestConfig = {
        method: "post",
        url: `${API_HOST}/auth-api/sign-in`,
        headers: {
          "Content-Type": "application/json",
        },
        data,
        validateStatus: () => true,
      };

      const response = await client(config);
      expect(response.status).toBe(404);
    } catch (e) {
      expect(e).toBeFalsy();
    }
  });

  test("Check If Authenticated Should Fail", async () => {
    try {
      const data = JSON.stringify({
        email: "t@t.com",
        password: "123",
      });

      const config: AxiosRequestConfig = {
        method: "get",
        url: `${API_HOST}/auth-api/is-authed`,
        headers: {
          "Content-Type": "application/json",
        },
        data,
        validateStatus: () => true,
      };

      const response = await client(config);
      expect(response.status).toBe(401);
    } catch (e) {
      expect(e).toBeFalsy();
    }
  });
});
