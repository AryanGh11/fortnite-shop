import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { prisma } from "@/util/prisma";
import exchangePrice from "@/util/exchangePrice";
import NextAuth, { DefaultSession } from "next-auth"

export const revalidate = 0;

const fetchOrders = async () => {
  interface Session {
    user: DefaultSession["user"]
  }
  const user = await getServerSession(authOptions);
  if (!user) {
    return null;
  }
  const orders = await prisma.order.findMany({
    where: { userId: user.user?.id, status: "complete" },
    include: { products: true },
  });
  return orders;
};

export default async function Dashboard() {
  const orders = await fetchOrders();
  if (orders === null) {
    return <div className="pt-32">You need to be logged in to view your orders</div>;
  }
  if (orders.length === 0) {
    return (
      <div className="pt-32">
        <h1>No orders!</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="font-medium pt-12">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-lg p-8 my-12 bg-secondary"
          >
            <h2>Order reference: {order.id}</h2>
            <p>{`Time: ` + new Date(order.createdDate)}</p>
            <p className="font-medium py-2">
              Status:{" "}
              <span
                className={`${order.status === "complete"
                  ? "bg-green-600"
                  : order.status === "pending"
                    ? "bg-yellow-400"
                    : "bg-red-500"
                  } py-1 rounded-md px-2 mx-2 text-sm text-base-100`}
              >
                {order.status}
              </span>
            </p>
            <p className="font-medium">Total: {exchangePrice(order.amount)}</p>
            <div className="flex gap-8">
              {order.products.map((product) => (
                <div className="py-2" key={product.id}>
                  <div className="flex items-center gap-4">
                    <div className="flex-col justify-center items-center">
                      <Image
                        src={product.image!}
                        alt={product.name}
                        width={100}
                        height={100}
                        className="w-12 h-12 object-cover rounded-xl"
                      />
                      <h2 className="py-2">{product.name}</h2>
                    </div>
                    <p>{exchangePrice(product.price)}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
