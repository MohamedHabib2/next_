import { NextRequest } from "next/server";
import { productData } from "@/app/data/productData";
import prisma from "@/lib/prisma";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const { id, title, description, price, category, image } = body;

  const UpdatedProduct = await prisma.product.update({
    where: { id: params.id },
    data: {
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
    },
  });

  return Response.json(UpdatedProduct, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });

  await prisma.product.delete({
    where: { id: product?.id },
  });

  return Response.json("Deleted successfully", { status: 200 });
}
