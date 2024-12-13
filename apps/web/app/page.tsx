import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <div className="container mx-auto pt-header">
      <Link
        href="/marketplace"
        className="inline-flex items-center justify-center rounded h-10 px-5 bg-primary-gradient text-white mt-10"
      >
        Go to Marketplace
      </Link>
    </div>
  );
}
