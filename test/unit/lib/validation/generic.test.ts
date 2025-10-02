import { describe, expect, it } from "@jest/globals";

import { GenericValidator } from "../../../../src/lib/validation/generic";

const validator = new GenericValidator();

const REALLY_LONG_STRING = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

describe("GenericValidator", () => {
    describe("isValidEmail", () => {
        it("should be invalid if empty string", () => {
            expect(validator.isValidEmail("")).toBeFalsy();
        });
        it("should be invalid if single word", () => {
            expect(validator.isValidEmail("example")).toBeFalsy();
        });
        it("should be invalid if no TLD", () => {
            expect(validator.isValidEmail("email@example")).toBeFalsy();
        });
        it("should be valid with valid email", () => {
            expect(validator.isValidEmail("email@example.com")).toBeTruthy();
        });
    });
    describe("isValidCompanyName", () => {
        it("should be invalid if empty string", () => {
            expect(validator.isValidCompanyName("")).toBeFalsy();
        });
        it("should be invalid if single letter", () => {
            expect(validator.isValidCompanyName("A")).toBeFalsy();
        });
        it("should be invalid if extremely long", () => {
            expect(validator.isValidCompanyName(REALLY_LONG_STRING)).toBeFalsy();
        });
        it("should be valid if regular name", () => {
            expect(validator.isValidCompanyName("Companies House")).toBeTruthy();
        });
    });
    describe("isValidDescription", () => {
        it("should be invalid if empty string", () => {
            expect(validator.isValidDescription("")).toBeFalsy();
        });
        it("should be invalid if extremely long", () => {
            expect(validator.isValidDescription(REALLY_LONG_STRING)).toBeFalsy();
        });
        it("should be valid if regular description", () => {
            expect(validator.isValidDescription("Hello I am a description.")).toBeTruthy();
        });
    });
});
