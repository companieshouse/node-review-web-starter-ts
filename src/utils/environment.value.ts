export const getEnvironmentValue = (key: string, defaultValue = ""): string => {
    const value: string = process.env[key] || defaultValue;
    return value;
};
