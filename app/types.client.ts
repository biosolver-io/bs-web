import { Prisma } from "@prisma/client";

export type Degree = Prisma.DegreeGetPayload<{
  include: {
    accomplishments: true;
  }
}>;

export interface WorkExperience {
  company?: string;  
  role?: string;
  roleType?: string;
  country?: string;
  city?: string;
  stateOrProvince?: string;
  start?: string;
  end?: string;
  currentlyWorking?: boolean;
  accomplishments?: Accomplishment[];
  highlights?: string[];
  skills?: string[];
  domains?: string[];
  subdomains?: string[];
}

export type Accomplishment = Prisma.AccomplishmentGetPayload<{}>;