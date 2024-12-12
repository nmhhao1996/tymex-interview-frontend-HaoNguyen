import Image from "next/image";

export function Banner() {
  return (
    <div className="flex bg-slate-200/25 bg-[url(/img/hero-background.jpeg)] bg-cover">
      <div className="bg-black/60 flex-1 pt-header">
        <Image
          src="/img/new-arrival.png"
          alt={""}
          width={1093.3}
          height={291.37}
          className="w-[50%] mx-auto my-16"
        />
        <div className="relative">
          <Image
            src="/img/product-banner.png"
            alt={""}
            height={300}
            width={1920}
            className="w-full"
          />
          <div className="text-right absolute left-0 right-0 bottom-0">
            <div className="container mx-auto">
              <div className="float-right relative">
                <Image
                  src="/img/dj.png"
                  alt={""}
                  height={550} // 550
                  width={395} // 395
                />
                <div className="absolute bottom-0 right-0">
                  <div className="relative">
                    <Image
                      src="/img/paint.png"
                      alt={""}
                      height={169} // 550
                      width={437} // 395
                    />
                    <div className="text-7xl text-white font-drone-ranger-pro absolute top-[55%] translate-x-[-5%] translate-y-[-50%] left-0 right-0 text-center ">
                      The DJ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
