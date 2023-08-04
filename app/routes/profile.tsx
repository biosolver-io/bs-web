import { LoaderArgs, json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { useState } from "react";
import { getDegrees } from "~/models/degree.server";
import { requireUserId } from "~/session.server";
import { cx, useUser } from "~/utils";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  const degrees = await getDegrees({ userId });
  return json({ degrees });
};

const tabs = [
  { name: 'Personal', href: 'personal', current: false },
  { name: 'Education', href: 'education', current: false },
  { name: 'Work', href: 'work', current: false },
  { name: 'Skills', href: 'skills', current: true },
]

type ProfileTab = 'Education' | 'Work' | 'Skills' | 'Personal'

export function Tabs({
  selectedTab = 'Personal',
  changeTab
}: {
  selectedTab: ProfileTab
  changeTab: (tab: ProfileTab) => void
}) {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        {tabs.map((tab) => (
          <Link key={tab.name} to={tab.href} className="block p-4 text-xl text-blue-500">
            <div>
              {tab.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex w-full" aria-label="Tabs">
            {tabs.map((tab) => (

              <button
                key={tab.name}
                className={cx(
                  tab.name === selectedTab
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium'
                )}
                onClick={() => changeTab(tab.name as ProfileTab)}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div >
  )
}

export default function ProfilePage() {
  const data = useLoaderData<typeof loader>();
  const user = useUser();
  const navigate = useNavigate()

  const [currentTab, setCurrentTab] = useState<ProfileTab>('Personal')
  const changeTab = (tab: ProfileTab) => {
    setCurrentTab(tab)
    navigate(`${tab.toLowerCase()}`)
  }
  return (
    <div className="max-w-7xl w-full mx-auto">
      <Tabs selectedTab={currentTab} changeTab={changeTab} />
      <Outlet />
    </div>
  )
}