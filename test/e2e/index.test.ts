import { describe, expect, test } from "@jest/globals";

import app from "../../src/app";
import { load } from "cheerio";
import supertest from "supertest";

const router = supertest(app);

describe("GET /", () => {
    test("/", async () => {
        const response = await router.get("/");

        expect(response.status).toEqual(200);
        const $ = load(response.text);
        expect($("h1").text()).toEqual("Index Router: Home page");
    });
});
