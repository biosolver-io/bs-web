import { Link } from '@remix-run/react'
import logoPng from '~/assets/images/logos/base.png'

export default function AppHeader() {
  return (
    <div className="w-full mx-auto h-auto flex flex-row items-center">
      <img src={logoPng} alt="logo" className="w-20 h-auto" />
      <Link to="/matches">Your Matches</Link>
      <Link to="/profile">Profile</Link>
    </div>
  )
}