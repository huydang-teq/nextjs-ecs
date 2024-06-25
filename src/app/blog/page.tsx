import { Suspense } from "react";
import BlogList from "../components/BlogList";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h2 className="uppercase">blog page</h2>
      <Suspense fallback={<h1>Loading....</h1>}>
        <BlogList />
      </Suspense>
    </main>
  );
}
