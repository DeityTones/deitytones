import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center
                     text-center text-white px-6 pt-32 pb-20">
      <p className="text-[#E5B868] text-sm font-semibold tracking-widest
                    uppercase mb-4">
        404
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        This Chamber Is Sealed
      </h1>
      <p className="text-white/60 text-lg max-w-xl mb-10">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="px-10 py-4 rounded-full bg-[#E5B868] text-black font-bold
                   text-lg hover:scale-105 transition-transform duration-200"
      >
        Back To The Domain
      </Link>
    </main>
  )
}
