import { z } from 'zod'

const schema = z.object({
  type: z.string(),
  field: z.string(),
  country: z.string(),
  university: z.string(),
  accomplishments: z.array(z.object({
    name: z.string(),
    type: z.string(),
    certificate: z.string(),
    link: z.string(),
    id: z.string(),
    publisher: z.string(),
    title: z.string(),
  })),
})

import { makeDomainFunction } from 'domain-functions'

const mutation = makeDomainFunction(schema)(async (values) => (
  console.log(values) /* or anything else, like saveMyValues(values) */
))

import { formAction } from '~/form-action.server' /* path to your custom formAction */
import { ActionFunction } from '@remix-run/node'

export const action: ActionFunction = async ({ request }) =>
  formAction({
    request,
    schema,
    mutation,
    successPath: '/success', /* path to redirect on success */
  })

import { Form } from '~/form' /* path to your custom Form */
import countries from '~/assets/data/countries'
import { useRef } from 'react'

export default () => {
  const accomplishmentTitleRef = useRef<HTMLInputElement>(null)
  const accomplishmentTypeRef = useRef<HTMLInputElement>(null)
  const accomplishmentCertificateRef = useRef<HTMLInputElement>(null)
  const accomplishmentLinkRef = useRef<HTMLInputElement>(null)
  const accomplishmentIdRef = useRef<HTMLInputElement>(null)
  const accomplishmentPublisherRef = useRef<HTMLInputElement>(null)
  const accomplishmentNameRef = useRef<HTMLInputElement>(null)

  return (
    <Form schema={schema} values={{ accomplishments: [] }}>
      {
        ({ Field, Errors, Button, watch, setValue }) => {
          const accomplishments = watch('accomplishments')

          return (
            <>
              <Field name="type" label="First name" />
              <Field name="field">
                {({ Label, SmartInput, Errors }) => (
                  <>
                    <Label>E-mail</Label>
                    <em>You'll hear from us at this address 👇🏽</em>
                    <SmartInput />
                    <Errors />
                  </>
                )}
              </Field>
              <Field name="country" type='select' options={countries.map(country => {
                return {
                  label: country.name,
                  name: country.name,
                  value: country.code,
                }
              })} />
              <Field name="university" />
              <Field name="accomplishments">
                {({ Label, Errors }) => (
                  <>
                    <Label />
                    <fieldset className="gap-2">
                      <input
                        type="text"
                        className="block w-full rounded-md border-gray-300 text-gray-800
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                        placeholder="Name"
                        ref={accomplishmentNameRef}
                      />
                      <input
                        type="text"
                        className="block w-full rounded-md border-gray-300 text-gray-800
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                        placeholder="Type"
                        ref={accomplishmentTypeRef}
                      />
                      <input
                        type="text"
                        className="block w-full rounded-md border-gray-300 text-gray-800
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                        placeholder="Certificate"
                        ref={accomplishmentCertificateRef}
                      />
                      <input
                        type="text"
                        className="block w-full rounded-md border-gray-300 text-gray-800
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                        placeholder="Link"
                        ref={accomplishmentLinkRef}
                      />
                      <input
                        type="text"
                        className="block w-full rounded-md border-gray-300 text-gray-800
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                        placeholder="Identifier"
                        ref={accomplishmentIdRef}
                      />
                      <input
                        type="text"
                        className="block w-full rounded-md border-gray-300 text-gray-800
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                        placeholder="Publisher"
                        ref={accomplishmentPublisherRef}
                      />
                      <input
                        type="text"
                        className="block w-full rounded-md border-gray-300 text-gray-800
                      shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                        placeholder="Title"
                        ref={accomplishmentTitleRef}
                      />
                      <button
                        className="rounded-md bg-pink-500 px-4"
                        onClick={(event) => {
                          event.preventDefault()

                          const name = accomplishmentNameRef.current?.value
                          const type = accomplishmentTypeRef.current?.value
                          const link = accomplishmentTypeRef.current?.value || ''
                          const publisher = accomplishmentTypeRef.current?.value || ''
                          const id = accomplishmentTypeRef.current?.value || ''
                          const title = accomplishmentTypeRef.current?.value || ''
                          const certificate = accomplishmentTypeRef.current?.value || ''

                          if (name && type) {
                            setValue(
                              'accomplishments',
                              [...accomplishments, { name, type, link, publisher, id, title, certificate }],
                              { shouldValidate: true },
                            )
                            accomplishmentNameRef.current.value = ''
                            accomplishmentTypeRef.current.value = ''
                          }
                        }}
                      >
                        +
                      </button>
                    </fieldset>
                    {/* {accomplishments && (
                      <section className="-ml-1 flex flex-wrap pt-1">                        
                        {accomplishments.map((accomplishment, index) => (
                          <div key={index} className='w-full p-5 border-2 rounded-lg'>
                            <span className="m-1 flex items-center rounded-md bg-pink-500 px-2 py-1 text-white">
                              <span className="flex-1">
                                {accomplishment.name} ({accomplishment.title})
                              </span>
                              <button
                                className="ml-2 text-pink-700"
                                onClick={() => {
                                  setValue(
                                    'accomplishments',
                                    accomplishments.filter(
                                      ({ name }) => name !== accomplishment.name,
                                    ),
                                    { shouldValidate: true },
                                  )
                                }}
                              >
                                X
                              </button>
                            </span>                            
                          </div>
                        ))}
                      </section>
                    )} */}
                    <Errors />
                  </>
                )}
              </Field>
              <Errors />
              <Button />
            </>
          )
        }
      }
    </Form>
  )
}