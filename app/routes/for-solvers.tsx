import Footer from "~/layout/anon/Footer";
import Header from "~/layout/anon/Header";
import ListHighlight from "~/layout/anon/ListHighlight";
import SimpleHighlight from "~/layout/anon/SimpleHighlight";
import FieldsSection from "~/layout/anon/common/FieldsSection";
import ServicesSection from "~/layout/anon/common/ServicesSection";
import HeroSection from "~/layout/anon/solver/HeroSection";

export default function SeekerPage() {
  return (
    <div className="p-10">
      <HeroSection />
      <SimpleHighlight
        className="mt-20"
        title="How are we different?"
        description="With Bio-Solver you would not have to apply for jobs. We will screen your selected skills and assign points for each and add that to our database. We will use a skill-match algorithm to connect you with remote freelancing projects." />
      <SimpleHighlight
        className="mt-10"
        title="Who can be a Solver?"
        description="Anyone, anywhere who is a Biotech/Pharma expert/student who can help others solve their problems through remote freelance work." />
      <ListHighlight
        className="mt-10"
        title="How to be a Solver?"
        bullets={[
          "Apply to us online to be a Solver.",
          "Fill in the application form and upload all necessary documents.",
          "Choose the job types that you are interested in.",
          "Choose your field and skills.",
          "Set your own hourly rate.",
          "Participate in our screening process which may include technical assessments, interviews, or demo projects.",
          "Once your screening is done you will be provided with scores for each skill set.",
          "Once a posted project matches your skill set, we would notify you to apply for it.",
          "If you like the project, you can apply with a single click.",
          "If you are selected for the project, you can begin work on a remote basis."
        ]} />
      <SimpleHighlight
        className="mt-10"
        title="What is our commission?"
        description="We charge you commission each time you finish a project, our base commission rate starts at 20% and goes down as your earning goes higher monthly." />
      <ServicesSection />
      <FieldsSection />
    </div>
  )
}