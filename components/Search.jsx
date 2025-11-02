export default function Search() {
  return (
    <form className="flex h-9 w-full items-center gap-2 rounded-full bg-white pl-3 pr-4 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20">
      <Image src="/icons/search.svg" width={18} height={18} alt="Search" />
      <input
        type="text"
        placeholder="Search documentation..."
        className="flex-1 bg-transparent focus:outline-none text-zinc-700 dark:text-zinc-300"
      />
      <span className="ml-auto text-2xs text-zinc-400 dark:text-zinc-500">
        <kbd className="font-sans">Ctrl</kbd> + <kbd>K</kbd>
      </span>
    </form>

    
  );
}
