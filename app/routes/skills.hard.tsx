import { ActionArgs, json } from "@remix-run/node";
import { prisma } from "~/db.server";

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  const query = body.get("query") as string;
  const skills = await prisma.skill.findMany({
    where: {
      name: {
        contains: query,
      },
      type: "hard",
    },
  });
  return json({
    skills,
  })
}
