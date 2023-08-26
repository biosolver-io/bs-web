import { ActionArgs, json } from "@remix-run/node";
import { prisma } from "~/db.server";
import { requireUserId } from "~/session.server";


export const action = async ({ request }: ActionArgs) => {
  const userId = await requireUserId(request)
  const body = await request.formData()

  await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      videoSummaryUrl: body.get('videoSummaryUrl') as string,
      skills: {
        createMany: {
          data: [
            ...(body.getAll('softSkills') as string[]).map((skill) => ({
              name: skill,
              type: 'SOFT_SKILL'
            })),
            ...(body.getAll('hardSkills') as string[]).map((skill) => ({
              name: skill,
              type: 'HARD_SKILL'
            }))
          ]
        }
      },
    }
  })
  await prisma.userFeedback.create({
    data: {
      user: {
        connect: {
          id: userId
        }
      },
      feedback: body.get('feedback') as string,
    }
  })

  return json({
    action: 'saveMiscInfo',
    success: true
  })
}