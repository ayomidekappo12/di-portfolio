import Image from "next/image";
import Link from "next/link";

export function ThankYouSection() {
  return (
    <section className="px-6 pt-20 md:pt-32">
      <div className="mx-auto flex max-w-xl flex-col items-center">
        <div className="relative flex w-full items-center justify-center">
          <div className="relative z-10 flex items-center justify-center">
            <Image
              src="./coffee.svg"
              alt="profile"
              width={120}
              height={120}
              className=" object-cover "
            />
          </div>
        </div>

        <h2 className="mt-3 text-center text-3xl font-medium tracking-tighter text-black md:text-4xl">
          Thanks for reading
        </h2>

        <div className="mt-5 flex flex-col items-center gap-4">
          <Link
            href="#"
            className="flex items-center gap-2 rounded-full border border-[#595959] bg-white px-6 py-3 text-sm font-medium text-[#595959] transition hover:bg-black hover:text-white"
          >
            <span className="text-base">←</span>
            Previous project
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 rounded-full border border-[#595959] bg-white px-8 py-3 text-sm font-medium text-[#595959] transition hover:bg-black hover:text-white"
          >
            Next project
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
