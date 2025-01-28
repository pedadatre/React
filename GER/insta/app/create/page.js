

import { createPost } from "../lib/actions";
import ImageSelector from "./image-selector";
export default () => {
    return (
        
        <form action={createPost} className="flex flex-col gap-8" encType="multipart/form-data">
            <input type="text" name="content" />
            <ImageSelector />
            <input type="submit" value="Create" />
        </form>
            );
        }
    