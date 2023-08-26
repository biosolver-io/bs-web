import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import CategoriesSection from "~/layout/anon/home/CategorySection";
import FullTimeJobCategoriesSection from "~/modules/solver_homepage/FullTimeJobCategoriesSection";
import HeroSection from "~/modules/solver_homepage/HeroSection";
import HowItWorksSection from "~/modules/solver_homepage/HowItWorksSection";
import JobCategoriesSection from "~/modules/solver_homepage/JobCategoriesSection";
import LatestJobsSection from "~/modules/solver_homepage/LatestJobsSection";
import RopeInSection from "~/modules/solver_homepage/RopeInSection";
//import HeroSection from "~/layout/anon/home/HeroSection";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Biosolver" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <div className="p-6">
      <HeroSection />
      <RopeInSection />
      <HowItWorksSection />
      <LatestJobsSection />
      <JobCategoriesSection />
      <FullTimeJobCategoriesSection />
    </div>
  );
}
