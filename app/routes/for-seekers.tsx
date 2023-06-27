import ListHighlight from "~/layout/anon/ListHighlight";
import SimpleHighlight from "~/layout/anon/SimpleHighlight";
import FieldsSection from "~/layout/anon/common/FieldsSection";
import ServicesSection from "~/layout/anon/common/ServicesSection";
import HeroSection from "~/layout/anon/seeker/HeroSection";

export default function SeekerPage() {
  return (
    <div className="p-10">
      <HeroSection />
      <SimpleHighlight
        className="mt-20"
        title="How are we different?"
        description="At Bio-Solver our Solvers (freelancers) do not apply to projects. We verify all their credentials and screen and score their skills and assign points for each and add that to our database. When you post a project, we identify the hard and soft skill requirements for the project and use a skill-match algorithm to connect you with the most suitable experts based on their hard and soft skills, so that you do not have deal with under qualified candidates." />
      <SimpleHighlight
        className="mt-10"
        title="Who can be a Seeker?"
        description="Anyone, anywhere who needs a Biotech/Pharma expert/student to help with project specific needs. You can be a Biotech/Pharma company, an academic lab or an individual." />
      <ListHighlight
        className="mt-10"
        title="How to be a Seeker?"
        bullets={[
          "Register as a Seeker.",
          "Fill in our online form to post a project.",
          "Select the hard and soft skill requirements for your projects.",
          "Choose a range of hourly rates you are willing to pay the Solver.",
          "Set the time duration and deliverables for the project.",
          "We will find the most suitable and available solvers for your project.",
          "You can choose a Solver from a curated shortlist of top Solvers and set up the payment.",
          "Once a project is finished, you can approve it.",
          "After we receive your approval, we process the payment to the Solver."
        ]} />
      <SimpleHighlight
        className="mt-10"
        title="What is our revenue model?"
        description="We charge the Solvers a commission for each project. You do not have to pay any additional cost." />
      <ServicesSection />
      <FieldsSection />
    </div>
  )
}