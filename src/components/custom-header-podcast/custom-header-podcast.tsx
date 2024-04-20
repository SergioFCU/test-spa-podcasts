import Link from "next/link";

export const CustomHeaderPodcast = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="w-full h-full flex flex-col">
      <header className="w-full flex border-b-1 my-5 p-1">
        <Link href="/">
          <h1 className="text-3xl font-semibold text-sky-700">Podcaster</h1>
        </Link>
      </header>
      {children}
    </section>
  );
};
