import { Outlet } from "@remix-run/react";
import AppHeader from "~/components/AppHeader";


export default function Dashboard() {
  return (
    <div>
      <AppHeader />
      <Outlet />      
    </div>
  )
}