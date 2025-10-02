import { describe, expect, it } from "@jest/globals";

import { UserFormsValidator } from "../../../../../src/lib/validation/formValidators/user";

describe("UserFormsValidator", () => {
    describe("validateSettingsUpdate", () => {
        it("should be invalid if empty payload", async () => {
            const validator = new UserFormsValidator();

            await expect(validator.validateSettingsUpdate({})).rejects.toStrictEqual({
                message: "Your request contains validation errors",
                name: "VALIDATION_ERRORS",
                stack: {
                    email: {
                        inline: "Enter an email address in the correct format, like name@example.com",
                        summary: "Email is not valid"
                    }
                },
                status: 400
            });
        });
        it("should be valid if correct payload", async () => {
            const validator = new UserFormsValidator();

            const result = await validator.validateSettingsUpdate({
                email: "example@company.com"
            });
            expect(result).toBeTruthy();
        });
    });
});
