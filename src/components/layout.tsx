import Link from "next/link";
import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center">
        <div className="h-full w-full overflow-y-scroll border-x border-slate-400 md:max-w-2xl">
          {props.children}
        </div>
        <footer className="flex w-full items-center justify-center border-t p-2">
          <Link
            href="https://github.com/mshubitidze"
            className="hover:underline hover:underline-offset-2"
          >
            @mshubitidze
          </Link>
        </footer>
      </main>
    </>
  );
};
