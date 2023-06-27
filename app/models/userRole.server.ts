import type { UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

export async function getRolesById(userId: UserRole["userId"]) {
  return prisma.userRole.findMany({ where: { userId } });
}

export async function createRole(userId: UserRole["userId"], role: string) {
  return prisma.userRole.create({
    data: {
      role,
      userId
    },
  });
}

export async function createRoles(userId: UserRole["userId"], roles: string[]) {
  return prisma.userRole.createMany({
    data: roles.map((role) => ({
      role,
      userId
    }))    
  });
}
