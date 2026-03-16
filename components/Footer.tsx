export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Sooraj. All rights reserved.</p>
        <p className="text-[11px]">
          Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}

