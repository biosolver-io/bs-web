import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { logout } from "~/session.server";

export const action = async ({ request }: ActionArgs) => {
  await logout(request)
  return redirect("/");
}

export const loader = async () => redirect("/");
