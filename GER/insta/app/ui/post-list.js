import Post from './post';
import {getPost} from '../lib/data';
export default async ()=>{
    const posts = await getPost();
    return(
        
        <div className='post-list'>
            {posts.map(post=>(
                <Post key={post.id} content={post.content} url={post.url}></Post>
            ))}
            <Post></Post>
            
        </div>
    )
}