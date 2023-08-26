
import { ActionArgs, LoaderArgs, json, redirect, unstable_composeUploadHandlers, unstable_createMemoryUploadHandler, unstable_parseMultipartFormData } from "@remix-run/node";
import { useActionData, useFetcher, useLoaderData, useSearchParams } from "@remix-run/react"
import { useEffect, useState } from "react";
import assessmentFormats from "~/assets/data/assessmentFormats";
import countries from "~/assets/data/countries";
import months from "~/assets/data/months";
import years from "~/assets/data/years";
import yesNos from "~/assets/data/yesNos";
import AccomplishmentCard from "~/components/AccomplishmentCard";
import AccomplishmentForm from "~/components/AccomplishmentForm";
import DegreeCard from "~/components/DegreeCard";
import LabelledDropdown from "~/components/LabelledDropdown"
import LabelledTextInput from "~/components/LabelledInput"
import { prisma } from "~/db.server";
import { requireUserId } from "~/session.server";
import { Accomplishment } from "~/types.client";
import { supabaseStorageUploaderHandler } from "~/upload-handler.server";
import { readFilePathFromFormData } from "~/utils";

export const action = async ({ request }: ActionArgs) => {
  const userId = await requireUserId(request)
  const body = await unstable_parseMultipartFormData(request, unstable_composeUploadHandlers(
    supabaseStorageUploaderHandler(userId),
    unstable_createMemoryUploadHandler(),
  ));
  const actionType = body.get('action')
  if (actionType === 'addCertificate') {
    const newCertification = await prisma.certification.create({
      data: {
        name: '',
        userId: await requireUserId(request),
        isTemp: true
      }
    })
    return json({
      newCertification
    })
  } else if (actionType === 'saveCertificate') {
    const issueYear = parseInt(body.get('issueYear') as string)
    const issueMonth = parseInt(body.get('issueMonth') as string)
    const expirationYear = parseInt(body.get('expiryYear') as string)
    const expirationMonth = parseInt(body.get('expiryMonth') as string)
    const durationInMonths = parseInt(body.get('durationInMonths') as string)
    await prisma.certification.update({
      where: {
        id: body.get('certificationId') as string
      },
      data: {
        name: body.get('name') as string,
        description: body.get('description') as string,
        issuingAuthority: body.get('issuingAuthority') as string,
        certificate: readFilePathFromFormData(body, 'certificate'),
        issueYear: isNaN(issueYear) ? null : issueYear,
        issueMonth: isNaN(issueMonth) ? null : issueMonth,
        expirationYear: isNaN(expirationYear) ? null : expirationYear,
        expirationMonth: isNaN(expirationMonth) ? null : expirationMonth,
        durationInMonths: isNaN(durationInMonths) ? null : durationInMonths,
        isTemp: false
      }
    })
    return redirect('/profile/degrees')
  } else {
    throw new Error('Invalid action type')
  }
}

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request)
  const certifications = await prisma.certification.findMany({
    where: {
      userId,
      isTemp: false
    }
  })
  return json({
    certifications
  });
}