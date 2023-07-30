"use client";

import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Stripe from "stripe";
import Image from "next/image";
import Link from "next/link";
import DarkLightMode from "./DarkLightMode";

export default function Nav({ user }: Session) {
  return (
    <nav className="w-full flex justify-between items-center bg-base-100">
      {/* Website name */}
      <Link href={"/"}>
        <h1 className="font-bold">The Last 🔥</h1>
      </Link>
      <div className="flex items-center gap-6">
        {/* Switch mode */}
        <DarkLightMode />
        {/* Check user session status */}
        {!user && (
          <button className="btn btn-primary text-base-100" onClick={() => signIn()}>
            Sign in
          </button>
        )}
        {user && (
          <div className="dropdown dropdown-end">
            <Image
              src={user?.image as string}
              alt={user?.name as string}
              width={36}
              height={36}
              className="rounded-full cursor-pointer dropdown "
              tabIndex={0}
            />
            <ul
              className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
              tabIndex={0}
            >
              <li>
                <a>Arad Gooz</a>
              </li>
              <li>
                <button onClick={() => signOut()}>Sign out</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
