import { NextResponse } from "next/server";
import {
  createCategory,
  getCategories,
} from "@/lib/services/category.service";
import { createCategorySchema } from "@/lib/validation/category.validation";
import { Prisma } from "@/app/generated/prisma/client";

export async function GET() {
  try {
    const categories = await getCategories();

    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = createCategorySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Validation failed.",
          errors: result.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const category = await createCategory(result.data);

    return NextResponse.json(category, { status: 201 });
  } catch (error) {

    if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  ) {
    return NextResponse.json(
      {
        message: "Category with this slug already exists.",
      },
      {
        status: 409,
      }
    );
  }

    console.error(error);

    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}