import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col ">
      <h1 className="text-3x1 mb-4">Inventory Managment Software</h1>
      <Link href="/dashboard/home/overview/">View dashboard</Link>
      <Link href="/home/">View front end hompage</Link>
      <h3 className="mt-4 font-bold text-3xl">Currently Under Development</h3>
    </div>
  );
}

//
// 26:15
