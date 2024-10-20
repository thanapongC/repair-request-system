import { NextRequest, NextResponse } from "next/server";
import { faker } from '@faker-js/faker';

function getRandomStatus(): string {
  const statuses = [
    "pending",
    "in-progress",
    "on-hold",
    "completed",
    "cancelled",
    "awaiting-approval",
    "under-review",
    "parts-ordered",
    "ready-for-pickup",
    "unrepairable",
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
    maintenanceId: `MA${String(index + 1).padStart(3, "0")}`,
    siteName: faker.location.cardinalDirection()+ '-' + Math.floor(Math.random() * 100),
    equipmentName: faker.vehicle.bicycle(),
    remake: faker.lorem.text(),
    status: getRandomStatus(),
    repirePrice: Math.floor(Math.random() * 10000),
  }));

  return NextResponse.json({ data, total });
}
