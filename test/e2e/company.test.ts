import { describe, expect, test } from "@jest/globals";

import app from "../../src/app";
import { load } from "cheerio";
import supertest from "supertest";

const router = supertest(app);

describe("GET /company", () => {
    test("/company/create", async () => {
        const response = await router.get("/company/create");

        expect(response.status).toEqual(200);
        const $ = load(response.text);
        expect($("h1").text()).toEqual("Company Router: Create a company page");
    });
    test("/company/details/1", async () => {
        const response = await router.get("/company/details/1");

        expect(response.status).toEqual(200);
        const $ = load(response.text);
        expect($("h1").text()).toEqual("Company Router: Company details page");
    });
});
