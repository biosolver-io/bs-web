import { ActionArgs, json, unstable_composeUploadHandlers, unstable_createMemoryUploadHandler, unstable_parseMultipartFormData } from "@remix-run/node";
import { prisma } from "~/db.server";
import { requireUserId } from "~/session.server";
import { supabaseStorageUploaderHandler } from "~/upload-handler.server";
import { readFilePathFromFormData } from "~/utils";

export const action = async ({ request }: ActionArgs) => {
  const userId = await requireUserId(request)
  const body = await unstable_parseMultipartFormData(request, unstable_composeUploadHandlers(
    supabaseStorageUploaderHandler(userId),
    unstable_createMemoryUploadHandler(),
  ));

  const minimumExpectedSalary = parseInt(body.get('minimumExpectedSalary') as string)
  const minimumHourlyRate = parseInt(body.get('minimumHourlyRate') as string)

  await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      firstName: body.get('firstName') as string,
      lastName: body.get('lastName') as string,
      phone: body.get('phoneNumber') as string,
      addressLine1: body.get('addressLine1') as string,
      addressLine2: body.get('addressLine2') as string,
      city: body.get('city') as string,
      state: body.get('state') as string,
      country: body.get('country') as string,
      postalCode: body.get('zip') as string,
      resume: readFilePathFromFormData(body, 'resume'),

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
          }))
        }
      },
      rolesOfInterest: {
        createMany: {
          data: (body.getAll('rolesOfInterest') as string[]).map((roleOfInterest) => ({
            role: roleOfInterest,
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