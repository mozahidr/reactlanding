
import { Banner } from '@/app/shared/Banner';
import bannerImg from '@/public/images/banner.svg';

export const Hero = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id='home'>
      <Banner 
        banner={bannerImg}
        heading="Develop your skills without diligence" 
        subheading="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
        soluta ducimus minima aspernatur reiciendis doloribus saepe dolores
        molestiae ullam vel neque, quasi quod unde necessitatibus architecto
        similique eos aliquid sint?"
        bt1="Get Started"
        btn2="Discount"
        />
    </div>
  )
};
