const fs = require("fs");
const path = require("path");

export async function getGames() {
  try {
    const filePath = path.join(process.cwd(), "public", "games.json"); // Путь к файлу
    const data = fs.readFileSync(filePath, "utf-8");
    const games = JSON.parse(data);
    return games;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    throw error;
  }
}
