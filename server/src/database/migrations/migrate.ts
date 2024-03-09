import 'dotenv/config';
import fs from "node:fs";
import path from "node:path";
import { Client } from "pg";

export default async function migrateDatabase(connection: Client) {
  try {
    const filePath = path.resolve(__dirname, "migrate.sql");

    const SQLContent = fs.readFileSync(filePath).toString();

    const queries = SQLContent.split(";").filter((p) => p.trim());

    for (let i = 0; i < queries.length; i += 1) {
      const query = queries[i];
      await connection.query(query);
    }
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  
  await client.connect();

  try {
    await migrateDatabase(client)
    console.log("Database migrated successfully!");
    process.exit(0);
  } finally {
    client.end()
  }
})().catch(e => console.error(e.message, e.stack))
