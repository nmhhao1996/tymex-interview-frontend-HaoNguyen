import Image from "next/image";

export function Banner() {
  return (
    <div className="flex bg-slate-200/25 bg-[url(/img/hero-background.jpeg)] bg-cover">
      <div className="bg-black/60 flex-1 pt-header">
        <Image
          src="/img/banner.png"
          alt={""}
          width={3840} // 1920
          height={1310} // 655
          className="w-full mt-16"
        />
      </div>
    </div>
  );
}
