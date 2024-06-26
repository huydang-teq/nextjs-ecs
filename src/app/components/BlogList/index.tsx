import { notFound } from "next/navigation";

interface DataType {
  title: string;
  id: string;
}

const BlogList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res?.ok) return null;
  const data: DataType[] = await res.json();


  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default BlogList;
