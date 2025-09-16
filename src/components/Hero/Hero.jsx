export default function Hero() {
  return (
    <section className="
        mt-[23px] md:mt-[62px] xl:mt-[85px]
        mb-[67px] md:mb-[119px] xl:mb-[131px]
        ">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-10">

          <div>

            <h1
            className="
                font-['Archivo'] font-semibold text-[#303030] leading-[1.1]
                text-[48px] md:text-[58px] xl:text-[72px] [@media(min-width:1920px)]:text-[90px]
            "
            >
              The yield-backed<br />
              stablecoin protocol<br />
              boosting DeFi{" "}
           
              <img
                src="/decor-element.png"
                alt=""
                className="inline-block align-[-0.2em] w-[59px] h-[59px] md:hidden"
                draggable="false"
              />{" "}
              liquidity
            </h1>

         
            <p
            className="
                mt-[14px] md:mt-4
                font-[Gilroy] font-normal text-[rgba(38,38,38,0.55)]
                text-[20px] md:text-[16px] xl:text-[20px] [@media(min-width:1920px)]:text-[24px]
            "
            >
            Keep your yield working for you — we keep your liquidity accessible
            </p>

  
            <div
              className="
                mt-[38px]          
                md:mt-[33px]     
                xl:mt-[70px]        
                [@media(min-width:1920px)]:mt-[79px]
                flex flex-wrap items-center
                gap-[8px] md:gap-[21px]
              "
            >
              <a
                href="#whitelist"
                className="
                  inline-block text-center
                  h-[57px] leading-[57px] rounded-[38px]
                  w-[164px] xl:w-[329px]
                  bg-[#2d2d2d] text-[#f7f7f7]
                  font-['Archivo'] font-semibold text-[16px] tracking-[0.02em]
                  backdrop-blur-[4px]
                  hover:bg-[#262626]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20
                "
              >
                Join Whitelist
              </a>

          
              <a
                href="#docs"
                className="
                  inline-block text-center
                  h-[57px] leading-[57px] rounded-[38px]
                  w-[144px] xl:w-[208px]
                  bg-[#e6e8ec] text-[#2e2e2e]
                  font-['Archivo'] font-semibold text-[16px] tracking-[0.02em]
                  backdrop-blur-[4px]
                  hover:bg-[#dee1e6]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10
                "
              >
                Read Docs
              </a>
            </div>
          </div>

   
          <div className="hidden md:block">
            <img
              src="/decor-element.png"
              alt=""
              className="mx-auto w-[152px] h-[152px] xl:w-[276px] xl:h-[276px] select-none"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}