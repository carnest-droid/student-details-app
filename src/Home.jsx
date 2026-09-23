import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";

function InstagramIcon({ size = 25, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37a4 4 0 1 1-3.37-3.37A4 4 0 0 1 16 11.37Z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <section className="relative">
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/25">
              <GraduationCap size={24} />
            </div>

            <div>
              <p className="font-bold text-slate-900">Student Portal</p>
              <p className="text-xs text-slate-500">Learn. Grow. Continue.</p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 sm:flex">
            <a href="#home" className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
              Home
            </a>
            <a href="#about" className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-white hover:text-indigo-700">
              About
            </a>
            <a href="#contact" className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-white hover:text-indigo-700">
              Contact
            </a>
          </div>

          <Link to="/fetch-details">
            <Button size="sm">
              Get Started
              <ArrowRight size={16} />
            </Button>
          </Link>
        </nav>

        <div id="home" className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-bold text-indigo-700 shadow-sm">
                <Sparkles size={14} />
                A smarter way to continue
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
                Your next academic step starts{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  here.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Welcome to a professional student experience created to make your information submission simple, clear, and convenient.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/fetch-details">
                  <Button size="lg" className="w-full sm:w-auto">
                    Fetch Your Details
                    <ArrowRight size={18} />
                  </Button>
                </Link>

                <a href="#about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Explore Platform
                    <ArrowRight size={18} />
                  </Button>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-slate-500">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-500" />
                  Student-friendly
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-500" />
                  Mobile responsive
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-500" />
                  Easy to use
                </span>
              </div>
            </div>

            <Link to="/fetch-details" className="group block">
              <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-indigo-700 via-blue-700 to-slate-950 text-white shadow-2xl shadow-indigo-950/25 transition duration-500 group-hover:-translate-y-2">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[28px] border-white/10" />
                <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border-[32px] border-white/10" />

                <CardHeader className="relative p-8 sm:p-10">
                  <div className="mb-12 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <GraduationCap size={32} />
                    </div>

                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-blue-100">
                      Student access
                    </span>
                  </div>

                  <CardTitle className="text-3xl leading-tight text-white sm:text-4xl">
                    Ready to continue your journey?
                  </CardTitle>

                  <CardDescription className="mt-5 text-sm leading-7 text-blue-100 sm:text-base">
                    Click this professional card to enter your student details and proceed to the next step.
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative px-8 pb-8 sm:px-10 sm:pb-10">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4">
                    <span className="font-semibold">Open details page</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-indigo-700 transition group-hover:translate-x-1">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="relative justify-between border-t border-white/10 px-8 py-5 text-xs text-blue-100 sm:px-10">
                  <span>Professional student workflow</span>
                  <span>Continue now →</span>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              About the platform
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Designed to make every step feel easier
            </h2>
            <p className="mt-4 leading-7 text-slate-500">
              A thoughtful student portal experience with a clean layout, helpful guidance, and a modern interface.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Card>
              <CardHeader>
                <ShieldCheck className="text-indigo-600" size={26} />
                <CardTitle className="pt-3 text-lg">Simple and secure</CardTitle>
                <CardDescription className="pt-2 leading-6">
                  A clear workflow designed to help students continue with confidence.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <UsersRound className="text-indigo-600" size={26} />
                <CardTitle className="pt-3 text-lg">Made for students</CardTitle>
                <CardDescription className="pt-2 leading-6">
                  A friendly experience designed for mobile and desktop users.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Sparkles className="text-indigo-600" size={26} />
                <CardTitle className="pt-3 text-lg">Modern experience</CardTitle>
                <CardDescription className="pt-2 leading-6">
                  Professional design with simple actions and helpful information.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <MessageCircle className="mx-auto text-indigo-300" size={32} />

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
            Contact us
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            We are here to help.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Connect with us for support, questions, suggestions, or feedback.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a href="https://wa.me/918709429655" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/10 p-5 text-left transition hover:-translate-y-1 hover:bg-emerald-500/10">
              <MessageCircle className="text-emerald-400" size={25} />
              <p className="mt-5 font-bold">WhatsApp</p>
              <p className="mt-1 text-sm text-slate-400">Chat with our support team</p>
            </a>

            <a href="https://instagram.com/myrixoz" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/10 p-5 text-left transition hover:-translate-y-1 hover:bg-pink-500/10">
              <InstagramIcon className="text-pink-400" size={25} />
              <p className="mt-5 font-bold">Instagram</p>
              <p className="mt-1 text-sm text-slate-400">Follow our updates</p>
            </a>

            <a href="carnestboy@gmail.com" className="rounded-2xl border border-white/10 bg-white/10 p-5 text-left transition hover:-translate-y-1 hover:bg-indigo-500/10">
              <Mail className="text-indigo-300" size={25} />
              <p className="mt-5 font-bold">Email us</p>
              <p className="mt-1 text-sm text-slate-400">Send us your message</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 pb-8 text-center text-white">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
          <Link to="/" className="flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
              <GraduationCap size={21} />
            </div>
            <span className="font-bold">Student Portal</span>
          </Link>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
            A professional student platform built to make your next academic step simpler, clearer, and more convenient.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-5 text-xs text-slate-500">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <span>Built with care for students</span>
          </div>

          <p className="mt-5 text-xs text-slate-600">
            © {new Date().getFullYear()} Student Portal. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default Home;
