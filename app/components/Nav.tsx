"use client";

import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Stripe from "stripe";
import Image from "next/image";
import Link from "next/link";
import DarkLightMode from "./DarkLightMode";
import { AiOutlineShop } from "react-icons/ai";
import { useCartStore } from "@/store";
import Cart from "./Cart";
import ErrorMassage from "./ErrorMassage";
import { AnimatePresence, motion } from "framer-motion";

export default function Nav({ user }: Session) {
  const cartStore = useCartStore();
  return (
    <nav className="w-full flex justify-between items-center bg-base-100 pb-8">
      {/* Website name */}
      <Link href={"/"}>
        <h1 className="font-bold">The Last 🔥</h1>
      </Link>
      <div className="flex items-center gap-6">
        <ul>
          {/* Toggle the Cart */}
          <li
            onClick={() => cartStore.toggleCart()}
            className="flex items-center text-3xl relative cursor-pointer"
          >
            <AiOutlineShop className="w-8 h-8" />
            <AnimatePresence>
              {/* Cart lenght */}
              {cartStore.cart.length > 0 && (
                <motion.span
                  animate={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  exit={{ scale: 0 }}
                  className="bg-primary text-base-100 text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center"
                >
                  {cartStore.cart.length}
                </motion.span>
              )}
            </AnimatePresence>
          </li>
        </ul>
        {/* Switch mode */}
        <DarkLightMode />
        {/* Check user session status */}
        {!user && (
          <button
            className="btn btn-primary text-base-100"
            onClick={() => signIn()}
          >
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
                <a>Orders (soon)</a>
              </li>
              <li>
                <button onClick={() => signOut()}>Sign out</button>
              </li>
            </ul>
          </div>
        )}
      </div>
      {cartStore.isOpen && <Cart />}
      {cartStore.error && <ErrorMassage />}
    </nav>
  );
}
