import React , {useEffect , useState} from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import {Dropdownabout } from "./Dropdownabout";

// import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaCoins } from "react-icons/fa";
import { Dropdowncoin } from "./Dropdowncoin";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  
  const handleSignOut = (e)=>{
    e.preventDefault()
    signOut()
  }

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 itmes-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold items-center">
            <span className="text-green-600">numis</span>
          </Link>

          <div className="h-full flex items-center space-x-4 ">
            <div className="links flex gap-5 text-sm font-semibold  ">
              <Link href="/" className="transform hover:scale-110 ">
                Home
              </Link>
              <Link href="" className="flex gap-1 transform hover:scale-110">
                {/* <FaCoins /> */}
                <Dropdowncoin />
              </Link>
              <Link href="#aboutus" className="  transform hover:scale-110">
                <Dropdownabout/>
              </Link>
            </div>
            {session ? (
              <>
                <Link
                  href="/"
                  onClick={handleSignOut}
                  // className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
                  className="black_btn"
                >
                  Sign out
                </Link>
                {session.user.role === "CLIENT" ? (
                  <div>
                    <Link 
                    href="/profile" 
                    className="rounded-full border border-green-600 bg-green-600 py-1.5 px-5 text-white transition-all hover:bg-white hover:text-green-700 text-center text-sm font-inter flex items-center justify-center"
                    >Profile 
                    </Link>
                  </div>
                  
                ) : null}
                {session.user.role === "ADMIN" ? (
                  <Link href="/dashbaord">Dashboard </Link>
                ) : null}
              </>
            ) : (
              <>
                <div className=" h-8 w-px bg-zinc-500 hidden sm:block " />
                <Link href="/login" className="black_btn">
                  Login
                </Link>
                <Link href="/register" className="outline_btn ">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
