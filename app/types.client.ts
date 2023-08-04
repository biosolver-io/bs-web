import { Prisma } from "@prisma/client";

export type Degree = Prisma.DegreeGetPayload<{
  include: {
    accomplishments: true;
  }
}>;

export type WorkExperience = Prisma.WorkExperienceGetPayload<{
  include: {
    accomplishments: true;
  }
}>;

export type Accomplishment = Prisma.AccomplishmentGetPayload<{}>;