import { useCartStore } from "@/store";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import emptyAnimation from "@/public/empty.json";
import Image from "next/image";
import exchangePrice from "@/util/exchangePrice";
import { IoIosArrowBack } from "react-icons/io"
import { MdOutlineDeleteOutline } from "react-icons/md"
import Checkout from "./Checkout";

export default function Cart() {
  const cartStore = useCartStore();
  //Total Vbucks
  const totalVbucks = cartStore.cart.reduce((acc, item) => {
    if (item.finalPrice) {
      return acc + item.finalPrice! * item.quantity!;
    }
    return acc + item.price?.finalPrice! * item.quantity!;
  }, 0);
  return (
    <motion.div
      onClick={() => cartStore.toggleCart()}
      className="w-full h-screen fixed top-0 right-0 z-10 bg-a_bit_darker"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full lg:w-2/5 h-screen absolute top-0 right-0 p-8 bg-base-100"
      >
        {cartStore.onCheckout === "cart" && (
          <button className="py-4 flex items-center gap-2" onClick={() => cartStore.toggleCart()}>
            <IoIosArrowBack />
            Back to store
          </button>
        )}
        {cartStore.onCheckout === "checkout" && (
          <button className="py-4 flex items-center gap-2" onClick={() => cartStore.setCheckout("cart")}>
            <IoIosArrowBack />
            Back to cart
          </button>
        )}
        {/* Cart's items */}
        {cartStore.cart.length > 0 && cartStore.onCheckout === "cart" && (
          <motion.div className="h-full flex flex-col justify-between pb-4">
            <motion.div className="flex flex-col gap-4 overflow-scroll no-scrollbar">
              {cartStore.cart.map((item) => (
                <motion.div
                  layout
                  key={item.mainId}
                  className="w-full h-24 bg-neutral flex justify-between items-center rounded-lg p-4"
                >
                  <motion.div className="flex w-full h-24 py-4 items-center justify-start gap-2">
                    <Image
                      src={item.icon}
                      alt={item.displayName}
                      width={100}
                      height={100}
                      className="h-full w-auto aspect-square rounded-md"
                    />
                    <div className="overflow-hidden flex flex-col gap-2">
                      <h1 className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.displayName}
                      </h1>
                      <h1 className="text-xs">
                        {"Quantity: " + item.quantity}
                      </h1>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-center w-20 h-20 gap-2">
                    <motion.div className="w-full" onClick={() => cartStore.removeProduct(item)}>
                      <MdOutlineDeleteOutline className="w-full h-full text-primary cursor-pointer" />
                    </motion.div>
                    <h1 className="text-primary font-bold">
                      {item.finalPrice && item.finalPrice}
                      {!item.finalPrice && item.price?.finalPrice}
                    </h1>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="flex flex-col gap-12 items-center py-8">
              <h1 className="font-bold text-primary">{exchangePrice(totalVbucks) + " Tooman"}</h1>
              <motion.button onClick={() => cartStore.setCheckout("checkout")} className="btn btn-primary text-base-100 w-full h-20">
                Pay now!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
        {/* When cart is empty! */}
        {!cartStore.cart.length && cartStore.onCheckout === "cart" && (
          <AnimatePresence>
            <motion.div className="pt-10 text-center">
              <Player className="w-64" autoplay src={emptyAnimation}></Player>
              <h1>Oooooh its empty man! 😒</h1>
            </motion.div>
          </AnimatePresence>
        )}
        {/* Checkout forms */}
        {cartStore.onCheckout === "checkout" && <Checkout />}
      </div>
    </motion.div>
  );
}
