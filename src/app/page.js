import Footer from "./Components/Footer.js";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-slate-400 rounded border border-slate-500 p-8">
          <h1 className="text-3xl font-bold underline">Home</h1>
        </div>
      </div>
      <Footer />
    </main>
  );
}