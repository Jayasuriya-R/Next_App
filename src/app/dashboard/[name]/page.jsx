'use client';

import { useQuery } from "@tanstack/react-query";

function Page({ params }) {

  const fetchData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${params.name}`
    );
    return res.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['todo', params.name], // ✅ important
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Dashboard: {data.title}</div>;
}

export default Page;