

import React from 'react'

const page = async ({params}) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  console.log(res)
  if(res.ok) console.log('Response is OK');
  const post = await res.json();
  console.log(post);

  return <div>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </div>;
  
  
}
export async function generateStaticParams(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  const data = await res.json();

   return data.map(x => ({
    id: x.id.toString()
   }))
}

export default page
