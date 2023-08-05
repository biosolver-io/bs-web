import { ActionArgs, json } from "@remix-run/node";
import { prisma } from "~/db.server";
import { requireUserId } from "~/session.server";

export const action = async ({ request }: ActionArgs) => {
  const userId = await requireUserId(request)
  const body = await request.formData();

  const minimumExpectedSalary = parseInt(body.get('minimumExpectedSalary') as string)
  const minimumHourlyRate = parseInt(body.get('minimumHourlyRate') as string)

  await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      firstName: body.get('firstName') as string,
      lastName: body.get('lastName') as string,
      phone: body.get('phone') as string,
      addressLine1: body.get('addressLine1') as string,
      addressLine2: body.get('addressLine2') as string,
      city: body.get('city') as string,
      state: body.get('state') as string,
      country: body.get('country') as string,
      postalCode: body.get('zip') as string,

      linkedinUrl: body.get('linkedinUrl') as string,      
      websiteUrl: body.get('websiteUrl') as string,
      googleScholarUrl: body.get('googleScholarUrl') as string,

      minimumExpectedSalary: isNaN(minimumExpectedSalary) ? null : minimumExpectedSalary,
      minimumHourlyRate: isNaN(minimumHourlyRate) ? null : minimumHourlyRate,
      currency: body.get('currency') as string,

      workStylePreferences: {
        createMany: {
          data: (body.getAll('workStylePreferences') as string[]).map((workStylePreference) => ({
            workStyle: workStylePreference,
            userId
          }))
        }
      },
      rolesOfInterest: {
        createMany: {
          data: (body.getAll('rolesOfInterest') as string[]).map((roleOfInterest) => ({
            role: roleOfInterest,
            userId
          }))
        }
      },
    }
  })

  return json({
    action: 'saveProfile',
    success: true
  })
}