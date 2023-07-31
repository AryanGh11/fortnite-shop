import { useCartStore } from "@/store";
import { AnimatePresence, motion } from "framer-motion"

export default function ErrorMassage() {
  const cartStore = useCartStore()
  setTimeout(() => {
    if (cartStore.error != "") {
      cartStore.setError("")
    }
  }, 4000)
  return (
    <motion.div className="flex justify-center items-center h-16 fixed bottom-12 left-12 right-12 bg-base-100 rounded-xl z-10" initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}>
      <AnimatePresence>
        {cartStore.error != "" && (
          <motion.div>{cartStore.error}</motion.div>
        )}
        {cartStore.error === "" && (
          null
        )}
      </AnimatePresence>
    </motion.div>
  )
}