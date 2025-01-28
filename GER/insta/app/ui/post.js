import Image from "next/image"
import {HeartIcon, ChatBubbleLeftIcon} from "@heroicons/react/24/solid"
import Link from "next/link"

export default () => {
return(
<div>
<div className="flex flex-auto m-4">
<Image
src="/elonsin.png"
className="rounded-full"
width={24}
height={24}/>
<span>Elon Musk</span>
<span>1944</span>
</div>
<div>
<Image src="/hitlersin.jpg"
className=""
width={384}
height={384}
/>
</div>
<div className="flex">
<HeartIcon className="w-8"/>
<ChatBubbleLeftIcon className="w-8"/>
</div>
<div>
<span>1488 Me gusta</span>
</div>
<div>
<span className="font-bold">Elon Musk:</span>
<span>'Es gracioso porque es cierto</span>
</div>
<div>
<span><Link href="comentarios">Ver los 22 comentarios</Link></span>
</div>
<div>
<input
className="dark:bg-neutral-950 w-full outline-0"
type="text"
placeholder="Add comment..."/>
</div>
</div>
)
}