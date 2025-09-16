import { useState } from "react";

const ITEMS = [
  {
    n: 1,
    title: "Yield Aggregator",
    gif: "/gif1.mp4",
    htitle: "One-click yield aggregation",
    text:
      "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
  },
  {
    n: 2,
    title: "Yield-backed Stablecoin",
    gif: "/gif2.mp4",
    htitle: "Unlock liquidity with BYD",
    text:
      "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time",
  },
  {
    n: 3,
    title: "Boost DeFi Liquidity",
    gif: "/gif3.mp4",
    htitle: "Boost protocols, earn more",
    text:
      "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards",
  },
];

const WIDTHS_XL = [
  "xl:w-[310px] min-[1920px]:w-[340px]",
  "xl:w-[329px] min-[1920px]:w-[360px]",
  "xl:w-[314px] min-[1920px]:w-[344px]",
];

const GAPS = ["gap-[34px]", "gap-[12px]", "gap-[32px]"];

export default function WhatIsBackyard() {
  const [active, setActive] = useState(0);
  const current = ITEMS[active];

  return (
    <section className="mx-auto max-w-7xl mb-[67px] md:mb-[119px] xl:mb-[147px] min-[1920px]:mb-[132px]">
      <h2
        className="
          font-['Archivo'] font-bold leading-[1.1] text-[#303030]
          text-[28px] md:text-[42px] xl:text-[48px]
          mb-[24px] md:mb-[36px]
        "
      >
        What is Backyard?
      </h2>

      <div className="xl:hidden">
        <div className="md:hidden flex flex-col items-center">
          <Media
            src={current.gif}
            className="mx-auto select-none w-[179px] h-[179px] object-cover"
          />
          <Capsule
            n={current.n}
            title={current.title}
            gapClass={GAPS[active]}
            className="w-[310px] h-[57px] -mt-[26px]"
          />
          <TextCard
            title={current.htitle}
            text={current.text}
            className="mt-[15px] w-[310px]"
          />
        </div>

        <div className="
          hidden md:grid
          md:grid-cols-[1fr_258px]
          md:items-center
          md:gap-y-10
          md:gap-x-[53px]
        ">
          <div className="flex flex-col items-center md:items-start">
            <Capsule
              n={current.n}
              title={current.title}
              gapClass={GAPS[active]}
              className="w-[388px] h-[57px]"
            />
            <TextCard
              title={current.htitle}
              text={current.text}
              className="mt-[15px] w-[388px]"
            />
          </div>

          <div className="md:w-[258px]">
            <Media
              src={current.gif}
              className="
                select-none
                w-[258px] h-[258px]
                object-cover
                mx-auto md:mx-0
              "
            />
          </div>
        </div>

        <div className="mt-[21px] flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show item ${i + 1}`}
              className={
                "h-[6px] w-[36px] rounded-full transition-colors " +
                (i === active ? "bg-[#3b3d3e]" : "bg-[#d9dadd]")
              }
            />
          ))}
        </div>
      </div>

      <div
        className="
          hidden xl:grid
          xl:grid-cols-[310px_329px_314px]
          min-[1920px]:grid-cols-[340px_360px_344px]
          xl:gap-[78px]
          min-[1920px]:gap-[145px]
          justify-center
        "
      >
        {ITEMS.map((it, idx) => (
          <FeatureStack
            key={it.n}
            data={it}
            wClass={WIDTHS_XL[idx]}
            gapClass={GAPS[idx]}
          />
        ))}
      </div>
    </section>
  );
}

function Media({ src, className }) {
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");
  return isVideo ? (
    <video
      src={src}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      preload="metadata"
      aria-hidden="true"
    />
  ) : (
    <img src={src} alt="" className={className} draggable="false" />
  );
}

function Capsule({ n, title, className = "", gapClass = "gap-[34px]" }) {
  return (
    <div
      className={
        `
        mx-auto md:mx-0
        rounded-[45px] bg-[#f4f6f7] backdrop-blur-[4px]
        px-[13px]
        flex items-center
        ` + `${gapClass} ${className}`
      }
      style={{ minHeight: 57 }}
    >
      <div className="inline-grid place-items-center w-[33px] h-[33px] rounded-full bg-[#2d322f] text-[#fbfbfc] backdrop-blur-[15.77px] font-['Archivo'] font-semibold tracking-[0.02em] text-[15px] leading-none">
        {n}
      </div>
      <div className="font-[Gilroy] font-normal text-[20px] text-[#303030]">
        {title}
      </div>
    </div>
  );
}

function TextCard({ title, text, className = "" }) {
  return (
    <div
      className={
        `
        rounded-[31px] bg-[#f4f6f7]
        p-[30px] md:p-[30px_17px]
        ` + className
      }
    >
      <h3 className="font-['Archivo'] font-extrabold text-[#2d322f] text-[18px] xl:text-[20px]">
        {title}
      </h3>
      <p className="mt-[11px] font-[Gilroy] font-normal text-[14px] text-[#787878]">
        {text}
      </p>
    </div>
  );
}

function FeatureStack({ data, wClass = "", gapClass = "gap-[34px]" }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <Media
          src={data.gif}
          className="
            select-none mx-auto
            w-[179px] h-[179px]
            md:w-[258px] md:h-[258px]
            object-cover
          "
        />
        <Capsule
          n={data.n}
          title={data.title}
          gapClass={gapClass}
          className={`
            h-[57px] -mt-[26px] md:-mt-[30px]
            w-[310px] md:w-[388px]
            ${wClass}
          `}
        />
      </div>

      <TextCard
        title={data.htitle}
        text={data.text}
        className={`
          mt-[15px]
          w-[310px] md:w-[388px]
          ${wClass}
        `}
      />
    </div>
  );
}
