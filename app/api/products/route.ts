// GET


import { productData } from "@/app/data/productData";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET() {
  const products = await prisma.product.findMany()
  return Response.json(products, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newProduct = await prisma.product.create({
    data: {
      title: body.title,
      price: body.price,
      description: body.description,
      category: body.category,
      image: body.image,
    },
  });

  // productData.push(newProduct);
  return Response.json(newProduct, { status: 201 });
}
