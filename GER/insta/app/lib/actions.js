'use server'
import { sql } from '@vercel/postgres'
import { put } from '@vercel/blob'


export async function createPost(formData) {
    
    const {url}= await put('media', 
        formData.get('media'), 
    {access: 'public'}) 
const content = formData.get('content')



   await sql`INSERT INTO POST(content, url) 
   VALUES(
   ${content},
   ${url}
   )`   
    
}