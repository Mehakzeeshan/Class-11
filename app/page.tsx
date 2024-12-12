import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


export default async function Home () {

 const data =  await client.fetch(`*[_type == "homepage"]{
   heading,
   paragraph,
   image,
   buttonText
     
}[0]`

)

//console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
console.log(data);

    return (
        <>
        <h1>{data.heading}</h1>
        <img src={urlFor(data.image).url()} alt="Poster" width={200} height={200} />
        </>
    )
}