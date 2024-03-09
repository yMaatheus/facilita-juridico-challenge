import { Pool } from 'pg';
import { parseEnv } from '../lib/env';

const { DATABASE_URL } = parseEnv(process.env);
 
export const pool = new Pool({
  connectionString: DATABASE_URL
})