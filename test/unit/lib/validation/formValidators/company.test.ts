import { describe, expect, it } from "@jest/globals";

import { CompanyFormsValidator } from "../../../../../src/lib/validation/formValidators/company";

describe("CompanyFormsValidator", () => {
    describe("validateCreateCompany", () => {
        it("should be invalid if empty payload", async () => {
            const validator = new CompanyFormsValidator();

            await expect(validator.validateCreateCompany({})).rejects.toStrictEqual({
                message: "Your request contains validation errors",
                name: "VALIDATION_ERRORS",
                stack: {
                    summary: "There was an error processing your request. Please try again."
                },
                status: 400
            });
        });
        it("should be valid if correct payload", async () => {
            const validator = new CompanyFormsValidator();

            const result = await validator.validateCreateCompany({
                email: "example@company.com",
                companyName: "Companies House",
                description: "Example company information."
            });
            expect(result).toBeTruthy();
        });
    });
});
