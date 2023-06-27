import type { User, Accomplishment } from "@prisma/client";

import { prisma } from "~/db.server";

export function getAccomplishments({
  degreeId,
}: Pick<Accomplishment, "degreeId">) {
  return prisma.accomplishment.findMany({
    where: { degreeId },
    orderBy: { updatedAt: "desc" },
  });
}

export function createAccomplishment({
  name,
  certificate = '',
  title = '',
  link,
  organization = '',
  identifier = '',
  degreeId
}: Pick<Accomplishment, "name" | "degreeId" | "link"> & Partial<Accomplishment>) {
  return prisma.accomplishment.create({
    data: {
      name,
      link,
      certificate,
      title,
      organization,
      identifier,
      degreeId,
    },
  });
}

export function deleteAccomplishment({
  id,
  degreeId,
}: Pick<Accomplishment, "id" | "degreeId">) {
  return prisma.accomplishment.deleteMany({
    where: { id, degreeId },
  });
}
