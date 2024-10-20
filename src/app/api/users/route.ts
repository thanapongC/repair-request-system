import { NextRequest, NextResponse } from "next/server";
import { faker } from '@faker-js/faker';

function getRandomStatus(): string {
  const statuses = [
    "active",
    "inactive",
    "waiting"
  ];

  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}

function getRandomRole(): string {
  const statuses = [
    "Admin",
    "Supervisor",
    "Quality Control",
    "Technician",
    "Officer/Manager",
    "Employee",
    "Maintenance/ Repair Technician"
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
    userId: `U-${String(index + 1).padStart(3, "0")}`,
    employeeName: faker.person.fullName(),
    role: getRandomRole(),
    company: faker.company.name(),
    position: faker.person.jobTitle(),
    status: getRandomStatus(),
  }));

  return NextResponse.json({ data, total });
}
