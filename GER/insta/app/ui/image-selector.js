'use client'
import { useState } from "react"
import Image from "next/image"
export default () => {
const[imageurl,setImageurl] = useState("/Favicon1.png")
    function preview(event) {
        setImageurlg(URL.createObjectURL(event.target.files[0]))
       
}
    return (
        <>
            <label htmlFor="myfs">
                <Image src={imageurl} width={24} height={24} alt="preview" />
            </label>
            <label id="myfs" type="file" name="media" hidden onChange={preview}/>
        </>
    )
}