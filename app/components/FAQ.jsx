import { Accordion } from './Accordion';

export const FAQ = () => {
  return (
    <div className="md:px-14 text-black px-4 max-w-[100%]">
      <div className="max-w-screen-lg rounded-lg md:mx-auto">
        <h1 className="md:text-3xl text-center text-xl font-bold text-[#232B36] my-6">
          Frequently Asked question
        </h1>
        <Accordion
          id={1}
          title="Do you prefer Android or IOS?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui eum amet, earum exercitationem molestias sunt alias repudiandae quam minima omnis neque laboriosam necessitatibus modi natus officia odit quod nesciunt."
        />
        <Accordion
          id={2}
          title="Do you love React or Angular?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui eum amet, earum exercitationem molestias sunt alias repudiandae quam minima omnis neque laboriosam necessitatibus modi natus officia odit quod nesciunt."
        />
        <Accordion
          id={3}
          title="Is There any installment payment ?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui eum amet, earum exercitationem molestias sunt alias repudiandae quam minima omnis neque laboriosam necessitatibus modi natus officia odit quod nesciunt."
        />
      </div>
    </div>
  );
};
