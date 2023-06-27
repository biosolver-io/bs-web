import type { User, Degree } from "@prisma/client";

import { prisma } from "~/db.server";

export function getDegrees({ userId }: { userId: User["id"] }) {
  return prisma.degree.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
  });
}

export function createDegree({
  level,
  field,
  school,
  country,
  start,
  end,
  ongoing,
  userId,
}: Pick<Degree, "level" | "field" | "school" | "country" | "start" | "end" | "ongoing"> & { userId: User["id"] }) {
  return prisma.degree.create({
    data: {
      level,
      field,
      school,
      country,
      start,
      end,
      ongoing,      
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteDegree({
  id,
  userId,
}: Pick<Degree, "id"> & { userId: User["id"] }) {
  return prisma.degree.deleteMany({
    where: { id, userId },
  });
}
