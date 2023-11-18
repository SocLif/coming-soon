import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center align-middle flex-col gap-4">
      <h2 className="text-5xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
