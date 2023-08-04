import { ActionArgs, redirect, json } from "@remix-run/node";
import { prisma } from "~/db.server";
import { requireUserId } from "~/session.server";

export const action = async ({ request, params }: ActionArgs) => {
  const {
    experienceId
  } = params
  if (!experienceId) throw new Error('No experienceId provided')
  const body = await request.formData();
  const actionType = body.get('action')
  if (actionType === 'addAccomplishment') {
    const title = body.get('title') as string
    const publisher = body.get('publisher') as string
    const link = body.get('link') as string
    const type = body.get('type') as string
    const details = body.get('details') as string
    const status = body.get('status') as string
    const category = body.get('category') as string
    const organization = body.get('organization') as string
    const objective = body.get('objective') as string

    await prisma.accomplishment.create({
      data: {
        title,
        publisher,
        link,
        type,
        details,
        status,
        category,
        organization,
        objective,
        workExperienceId: experienceId        
      }
    })

    const accomplishments = await prisma.accomplishment.findMany({
      where: {
        workExperienceId: experienceId
      }
    })

    return json({
      accomplishments
    })
  } else {
    throw new Error('Invalid action type')
  }
}