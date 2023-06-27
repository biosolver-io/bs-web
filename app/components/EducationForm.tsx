import { useState } from 'react';
import DegreeForm from './DegreeForm';
import { Degree } from '~/types.client';
import DegreeCard from './DegreeCard';

interface EducationFormData {
  degrees: Degree[];
}

const EducationForm = () => {
  const [profile, setProfile] = useState<EducationFormData>({
    degrees: []
  });
  const [addingDegree, setAddingDegree] = useState(false);

  const onSubmit = (data: Degree) => {
    setProfile({
      ...profile,
      degrees: [
        ...profile.degrees,
        data
      ]
    });
    setAddingDegree(false);
    console.log(profile)
  };

  return (
    <div className='w-full max-w-4xl mx-auto'>
      {
        profile.degrees.map((degree, index) => (
          <DegreeCard degree={degree} key={index} />
        ))
      }
      {
        !addingDegree && <button onClick={() => {
          setAddingDegree(true);
        }} className='w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5'>
          Add Degree
        </button>
      }
      {
        addingDegree && <DegreeForm onSubmit={onSubmit} />
      }
    </div>
  );
};

export default EducationForm;