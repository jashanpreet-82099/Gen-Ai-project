import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import {Link} from "react-router"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1400);
  };

  return (
    <main className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-gray-950">
      {/* only the bits Tailwind's core utilities can't do: blob drift, dot-grid mask, floating label */}
      <style>{`
        .lf-dotgrid {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0);
          background-size: 28px 28px;
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 90%);
          mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 90%);
        }
        @keyframes lf-drift-a { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(40px, 30px); } }
        @keyframes lf-drift-b { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-30px, -40px); } }
        .lf-drift-a { animation: lf-drift-a 14s ease-in-out infinite; }
        .lf-drift-b { animation: lf-drift-b 16s ease-in-out infinite; }
        .lf-input::placeholder { color: transparent; }
        .lf-input:focus + .lf-label,
        .lf-input:not(:placeholder-shown) + .lf-label {
          top: 0.5rem;
          transform: translateY(0);
          font-size: 0.68rem;
          color: #c4b5fd;
        }
      `}</style>

      {/* dot-grid texture */}
      <div className="lf-dotgrid absolute inset-0 pointer-events-none" />

      {/* drifting background blobs */}
      <div className="lf-drift-a absolute -top-32 -left-24 w-96 h-96 rounded-full bg-pink-600 opacity-30 blur-3xl pointer-events-none" />
      <div className="lf-drift-b absolute -bottom-36 -right-24 w-96 h-96 rounded-full bg-cyan-500 opacity-30 blur-3xl pointer-events-none" />

      {/* card */}
      <div className="relative z-10 w-full max-w-md mx-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-9">
        {/* badge with pulse ring */}
        <div className="relative w-13 h-13 mb-5">
          <div className="absolute inset-0 rounded-2xl bg-pink-500 opacity-40 animate-ping" />
          <div className="relative w-13 h-13 rounded-2xl bg-gradient-to-br from-pink-500 to-cyan-400 flex items-center justify-center">
            <ShieldCheck size={24} className="text-white" strokeWidth={2.2} />
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-white tracking-tight">
          Welcome back
        </h1>
        <p className="text-sm text-gray-400 mt-1.5 mb-8">
          Log in to continue to your workspace
        </p>

        <form onSubmit={handleSubmit}>
          {/* email field */}
          <div className="relative mb-4">
            <Mail
              size={17}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
            <input
              className="lf-input w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 pt-5 pb-2.5 text-sm text-white outline-none transition-colors focus:border-pink-500 focus:bg-pink-500/10"
              type="email"
              id="email"
              name="email"
              required
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="lf-label absolute left-10 top-4 text-sm text-gray-500 pointer-events-none transition-all duration-150"
            >
              Email
            </label>
          </div>

          {/* password field */}
          <div className="relative mb-4">
            <Lock
              size={17}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
            <input
              className="lf-input w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-10 pt-5 pb-2.5 text-sm text-white outline-none transition-colors focus:border-pink-500 focus:bg-pink-500/10"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="lf-label absolute left-10 top-4 text-sm text-gray-500 pointer-events-none transition-all duration-150"
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>

          {/* remember + forgot */}
          <div className="flex items-center justify-between text-sm mb-6">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-pink-500" />
              Remember me
            </label>
            <a href="#" className="text-pink-300 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-br from-pink-500 to-pink-700 shadow-lg shadow-pink-900/40 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-70 disabled:translate-y-0"
          >
            {submitting ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-white hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}