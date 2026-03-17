

async function page({ params }) {
   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.name}`);
  const data = await res.json();
  console.log(data);
  return (
    <div>Dashboard: {data.title}</div>
  )
}



export default page