"use client";
import { createNewCustomer } from "@/lib/services/user.service";
import { useRouter } from "next/navigation";
import React from "react";
export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [citizenid, setCitizenid] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const router = useRouter();
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) {
      setError("Please fill username!!!");
      return;
    }
    if (!password) {
      setError("Please fill password!!!");
      return;
    } else {
      if (password !== confirmPassword) {
        setError("Please confirm password again");
        return;
      }
    }
    if (!email) {
      setError("Please fill email !!!");
      return;
    }
    if (!phone) {
      setError("Please fill phone !!!");
      return;
    }
    if (!fullname) {
      setError("Please fill fullname !!!");
      return;
    }
    if (!citizenid) {
      setError("Please fill citizenid !!!");
    }
    const customerInfo = {
      username,
      email,
      password,
      fullname,
      citizenid,
      phone,
      parking_registrations: [],
      linked_bank_accounts: [],
      vehicle_infos: [],
    };
    const registerInfo = {
      username,
      email,
      password,
    };
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/auth/local/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registerInfo),
        }
      );
      const dataCustomer = createNewCustomer(customerInfo);
      const data = await res.json();
      if (!res.ok || !dataCustomer) {
        setError(data.error?.message || "Sign up failed");
        return;
      }
      router.push("/auth-page/sign-in");
    } catch (err) {
      setError((err as Error).message);
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
              <h2 className="font-semibold text-lg mr-auto">Sign up</h2>
              <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
            </div>
            <div className="mt-5">
              <form className="my-2.5 mx-3.5 flex flex-col items-center justify-between">
                <div className="md:flex flex-col md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Fullname <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Fullname"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="fullname"
                      id="fullname"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      CitizenID <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="CitizenID"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="citizenid"
                      id="citizenid"
                      value={citizenid}
                      onChange={(e) => setCitizenid(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Email <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="chaupk23411e@st.uel.edu.vn"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Phone <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="0375686583"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="phone"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Username <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="kimchau"
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
                      placeholder="******"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Confirm Password <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="******"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                {error ?? <span className="text-red text-sm">{error}</span>}
                <button
                  className="w-full mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                  onClick={(e) => handleSignUp(e)}
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
