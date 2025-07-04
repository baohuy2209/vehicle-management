"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuth } from "@/context/AuthContext";
export default function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const { setToken } = useAuth();
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) {
      setError("Please fill username");
      return;
    }
    if (!password) {
      setError("Please fill password");
      return;
    }
    try {
      const res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: username, // email hoặc username
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error?.message || "Login failed");
      }

      setToken(data.jwt); // JWT token để lưu vào localStorage, cookie, hoặc context
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 lg:bg-gray-500 bg-no-repeat bg-cover"
      style={{
        backgroundImage: 'url("/sai-gon-centre.jpg")',
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="font-semibold text-lg mr-auto">Sign in</h2>
              <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
            </div>
            <div className="mt-5">
              <form className="my-2.5 mx-3.5 flex flex-col items-center justify-between">
                <div className="md:flex flex-col md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Username <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Username"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="username"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Password <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Password"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {error ?? <span className="text-red text-sm">{error}</span>}
                <button
                  className="w-full mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                  onClick={(e) => handleLogin(e)}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
