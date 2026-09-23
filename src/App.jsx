import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./Home.jsx";
import FetchDetails from "./FetchDetails.jsx";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
      <div className="text-center">
        <h1 className="text-4xl font-black text-slate-900">
          Page not found
        </h1>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white"
        >
          Go to Home
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch-details" element={<FetchDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}