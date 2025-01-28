import Link from 'next/link';
export default ({children})=>{
   return(
    <div className='Flex gap-4'>
        <div className='profile'>
        <Link href="/profile">Perfil</Link>
        <Link href="/profile/likes">Me gusta</Link>
        <Link href="/profile/comments">Comentarios</Link>
        
        </div>
        {children}
    </div>
   );
}