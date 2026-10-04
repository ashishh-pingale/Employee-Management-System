import { useState } from "react";

const Login = ({loginHandel}) => {

  const [showPassword, setShowPassword] = useState(false);
  const [Password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandel(email,Password)

    setEmail('')
    setPassword('')
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">

      <div className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white">
            Welcome back
          </h1>

          <p className="text-sm text-zinc-500 mt-2">
            Login to your account
          </p>
        </div>

        <form onSubmit={(e)=>{
            handleSubmit(e)
        }}>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm text-zinc-300 mb-2">
              Email
            </label>

            <input
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              type="email"
              placeholder="Enter your email"
              required
              className="w-full h-11 px-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm outline-none placeholder:text-zinc-500 focus:border-purple-500 transition"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <div className="flex justify-between mb-2">
              <label className="text-sm text-zinc-300">
                Password
              </label>

              <button
                type="button"
                className="text-xs text-purple-400 hover:text-purple-300"
              >
                Forgot password?
              </button>
            </div>

            <div className="relative">
              <input
                value={Password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                className="w-full h-11 px-4 pr-14 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm outline-none placeholder:text-zinc-500 focus:border-purple-500 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              id="remember"
              className="accent-purple-500"
            />

            <label
              htmlFor="remember"
              className="text-sm text-zinc-500 cursor-pointer"
            >
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-11 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition"
          >
            Login
          </button>

        </form>

        {/* Signup */}
        <p className="text-center text-sm text-zinc-500 mt-6">
          Don't have an account?{" "}
          <button className="text-purple-400 hover:text-purple-300">
            Sign up
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;