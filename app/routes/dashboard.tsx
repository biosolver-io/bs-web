import { LoaderArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getNoteListItems } from "~/models/note.server";
import { getUserById } from "~/models/user.server";
import { requireUserId } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  const user = await getUserById(userId);
  return json({ user });
};

export default function Dashboard() {
  const loaderData = useLoaderData<typeof loader>();
  const { user } = loaderData;
  const profileStrength = 'Incomplete';
  return (
    <div className="flex flex-row">
      <div className="w-full">
        <h2 className="text-3xl text-gray-600">
          Welcome back{", " + user?.firstName}
        </h2>
        <div className="mt-5 w-full flow-root p-5 bordered border-[1px] rounded-sm border-gray-200">
          <div className="float-left">
            Profile Strength: <span className="text-purple-600">{profileStrength}</span>
            <div className="text-purple-600">Please complete your talent profile to enable all the features
            </div>
          </div>
          <Link to="/profile" className="float-right px-5 py-2 bg-purple-600 text-white rounded-sm hover:bg-purple-800">Edit Profile</Link>
        </div>
      </div>      
    </div>
  )
}