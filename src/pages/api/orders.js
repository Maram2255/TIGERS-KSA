import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) return res.status(401).end();

  if (req.method === "POST") {
    const { products, total } = req.body;
    const order = await prisma.order.create({
      data: { userId: session.user.id, products, total }
    });
    return res.status(201).json(order);
  }

  if (req.method === "GET") {
    const orders = await prisma.order.findMany({
      where: { userId: session.user.id }
    });
    return res.status(200).json(orders);
  }

  res.status(405).end();
}
