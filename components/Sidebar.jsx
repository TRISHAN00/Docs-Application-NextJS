import Link from "next/link";

export default function Sidebar({ docs }) {
  const roots = docs.filter((doc) => !doc.parent);
  const nonRoots = Object.groupBy(
    docs.filter((doc) => doc.parent),
    ({ parent }) => parent
  );
  return (
    <nav className="mt-10">
      <ul role="list" className="border-l border-transparent space-y-1">
        <li className="relative">
          <Link
            href="/docs"
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm font-medium text-zinc-900 transition hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400"
          >
            Introduction
          </Link>
          <ul role="list" className="mt-1 space-y-1">
            {["Guides", "Resources", "Test"].map((sub, i) => (
              <li key={i}>
                <Link
                  href={`/docs#${sub.toLowerCase()}`}
                  className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                >
                  {sub}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {[
          { name: "Quickstart", href: "/docs/quickstart" },
          { name: "SDKs", href: "/docs/sdks" },
          { name: "Authentication", href: "/docs/authentication" },
          { name: "Pagination", href: "/docs/pagination" },
          { name: "Errors", href: "/docs/errors" },
          { name: "Webhooks", href: "/docs/webhooks" },
        ].map((item, i) => (
          <li key={i}>
            <Link
              href={item.href}
              className="block py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
