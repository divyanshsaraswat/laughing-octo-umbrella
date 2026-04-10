/**
 * Sample TypeScript Configuration file that leaks secrets.
 */

export const AppConfig = {
    env: "production",
    port: 8080,

    // Leaked generic secret API key 
    // openAiToken: "sk-1234567890abcdef1234567890abcdef",
    openAiToken: "sk-1234567890abcdef1234567890abcdef",
// jvdfjv
    // A database password assignment
    db_password: "SuperSecretPassword12345!",
};

export function startDatabase() {
    console.log("Connecting to database using password...");
    // Just random garbage string that might trigger entropy but isn't a known token pattern
    const sessionTracker = "xQz49A1vB7yN2mP8kL5jH3gD6cF0eR9";
}
