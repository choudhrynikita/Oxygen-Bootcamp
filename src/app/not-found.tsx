import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-3xl">Page not in this classroom</h1>
      <p>That route is not a day, lab, or library page.</p>
      <p>
        <Link href="/">Back to Today</Link>
      </p>
    </div>
  );
}
