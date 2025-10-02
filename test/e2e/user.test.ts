import { describe, expect, test } from "@jest/globals";

import app from "../../src/app";
import { load } from "cheerio";
import supertest from "supertest";

const router = supertest(app);

describe("GET /user", () => {
    test("/user/settings", async () => {
        const response = await router.get("/user/settings");

        expect(response.status).toEqual(200);
        const $ = load(response.text);
        expect($("h1").text()).toEqual("User Router: User settings page");
    });

    test("/user/profile", async () => {
        const response = await router.get("/user/profile");

        expect(response.status).toEqual(200);
        const $ = load(response.text);
        expect($("h1").text()).toEqual("User Router: User profile page");
    });
});
