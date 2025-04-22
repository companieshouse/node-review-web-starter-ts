import { readFileSync } from "node:fs";

export default function getGOVUKFrontendVersion () {
    const file = readFileSync("package.json");
    const packageJson = JSON.parse(file.toString());
    const version = packageJson.dependencies["govuk-frontend"];
    // If the version is not pinned e.g. it is ^1.0.0 then throw an error
    // Since our CDN is tied to individual pinned versions.
    if (!version.match(/^\d/)) {
        throw new Error(`GOV.UK Frontend version "${version}" found, must be a pinned version.`);
    }
    return version;
}
