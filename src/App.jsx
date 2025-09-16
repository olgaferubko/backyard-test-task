import './index.css'
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WhatIsBackyard from "./components/WhatIsBackyard/WhatIsBackyard";

export default function App() {
  return (
    <div
      className="
        pt-4 px-5
        md:pt-5 md:px-8
        xl:pt-5 xl:px-[84px]
        min-[1920px]:pt-[34px] min-[1920px]:px-[275px]
      "
    >
      <Header activeHref="#" />
      <Hero />
      <WhatIsBackyard />
    </div>
  );
}