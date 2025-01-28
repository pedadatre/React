import { sql } from '@vercel/postgres';


export default async () => {
    await  sql`CREATE TABLE POST (id UUID DEFAULT uuid_generate_v4(), PRIMARY KEY (id), content TEXT, url TEXT)`;
    
    return <p>creada la base</p>
}