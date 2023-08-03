"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import animation from "@/public/order_confirmed.json";
import Link from "next/link";
import { useCartStore } from "@/store";
import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function OrderConfirmed() {
  const cartStore = useCartStore();
  useEffect(() => {
    cartStore.setPaymentIntent("");
    cartStore.clearCart();
  }, []);
  const checkoutOrder = () => {
    setTimeout(() => {
      cartStore.setCheckout("cart");
    }, 1000);
    cartStore.toggleCart();
    window.location.reload()
  };
  return (
    <motion.div
      className="flex-row items-center justify-center my-12"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="p-12 rounded-md text-center flex-col items-center justify-center gap-12">
        <h1 className="text-xl font-bold">Your order has been placed 😍</h1>
        <h2 className="text-sm my-4">Check your email for the receipt</h2>
        <Player src={animation} className="w-64 py-8 rounded-xl" />
        <div className="flex justify-center align-center gap-4">
          <Link href={"/dashboard"} onClick={checkoutOrder}>
            <button className="btn btn-primary">Check your order</button>
          </Link>
          <button className="btn btn-accent bg-base-100 text-primary" onClick={checkoutOrder}>
            OK Fine!
          </button>
        </div>
      </div>
    </motion.div>
  );
}
