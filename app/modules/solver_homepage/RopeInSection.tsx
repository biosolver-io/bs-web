import { useState } from "react"
import doubleRingSvg from '../../assets/images/backgrounds/double_ring_side.svg'
import { Switch } from "@headlessui/react"
import { cx } from "~/utils"
import { Form } from "@remix-run/react"

export default function RopeInSection() {
  const [targetSelection, setTargetSelection] = useState<'solver' | 'seeker'>('solver')
  return (
    <section className="text-black body-font max-w-7xl mx-auto w-full mt-20">
      <div className="flex justify-center w-full gap-5">

        <div className="w-full flex flex-col md:w-[750px] text-white">
          {
            targetSelection == 'solver' ? <div className="rounded-7xl text-4xl bg-gray-800 p-10">Connect with <span className="text-yellow-600">thousands of companies</span> that are looking for your expertise.
            </div> : <div className="rounded-7xl text-4xl bg-gray-800 p-10">
              Connect with <span className="text-yellow-600">thousands of experts</span> that are looking to leverage their skills.
            </div>
          }
          <div className="rounded-7xl text-3xl bg-gray-800 p-10 mt-5 text-white">
            {/* <Switch.Group as="div" className="flex items-center">
              <Switch.Label as="span" className="ml-3 text-sm">
                <span className="font-medium text-white">Find opportunities</span>
              </Switch.Label>
              <Switch
                checked={targetSelection === 'seeker'}
                onChange={() => {
                  if (targetSelection === 'seeker') setTargetSelection('solver')
                  else setTargetSelection('seeker')
                }}
                className={cx(
                  targetSelection === 'seeker' ? 'bg-yellow-600' : 'bg-gray-200',
                  'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2'
                )}
              >
                <span
                  aria-hidden="true"
                  className={cx(
                    targetSelection === 'seeker' ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
              <Switch.Label as="span" className="ml-3 text-sm">
                <span className="font-medium text-white">Connect with talent</span>
              </Switch.Label>
            </Switch.Group>
            <Form>
              <input className="w-full rounded-lg bg-gray-700 border-none p-3 mt-5 text-white" placeholder="Enter a job title" type="text" name="role" />
              <input className="w-full rounded-lg bg-gray-700 border-none p-3 mt-5 text-white" placeholder="Enter your location" type="text" name="location" />
              <button className="rounded-xl bg-yellow-400 hover:bg-yellow-700 text-black p-2 px-10 mt-5 text-sm" type="submit">Find</button>
            </Form> */}
            Focus on what matters most: <span className="text-yellow-600">your profile.</span> Using our proprietary algorithm, we match you with opportunities that are the best fit for your skills and experience.
          </div>
        </div>

        <div className="w-[420px] relative text-white rounded-7xl text-4xl bg-gray-800 p-5">
          <img className="absolute left-0 bottom-0 w-full h-auto" src={doubleRingSvg} />
        </div>
      </div>

    </section>
  )
}