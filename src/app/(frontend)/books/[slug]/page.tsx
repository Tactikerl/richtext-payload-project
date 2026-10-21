import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "books",
    where: { slug: { equals: slug } },
    limit: 1,
  });

  const book = result.docs[0];
  if (!book) notFound();

  return (
    <main>
      <h1>{book.title}</h1>
      <p>{book.synopsis}</p>
    </main>
  );
}
