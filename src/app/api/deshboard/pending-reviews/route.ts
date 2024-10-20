import { NextRequest, NextResponse } from "next/server";
import { faker } from '@faker-js/faker';

function getRandomDocTypeCode(): string {
  const statuses = [
    "MA",
    "B",
  ];

  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}

function getRandomDocType(): string {
  const statuses = [
    "Maintenance",
    "Borrowing",
  ];

  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;
  const total = 100; // Total number of items

  const data = Array.from({ length: pageSize }, (_, index) => ({
    id: `${page}-${index + 1}`,
    documentId: getRandomDocTypeCode() + `${String(index + 1).padStart(3, "0")}`,
    typeRequest: getRandomDocType(),
    requestFrom: faker.person.fullName(),
    company: faker.company.name(),
    status: 'pending',
  }));

  return NextResponse.json({ data, total });
}
