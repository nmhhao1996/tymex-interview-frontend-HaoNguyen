import SolidCirclePhone from "../ui/icons/solid-circle-phone";
import Message from "../ui/icons/message";
import Input from "../ui/input";
import { Button } from "../ui/button";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-footer text-white pt-20 pb-40">
      <div className="container mx-auto space-y-10 p-3">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-9">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl uppercase font-drone-ranger-pro font-bold">
              Navigation
            </h3>
            <div className="inline-grid grid-cols-3 gap-x-6 gap-y-3">
              {[
                "Home",
                "Whitepaper",
                "FAQs",
                "About us",
                "Marketplace",
                "News",
                "Our teams",
                "Roadmap",
                "Community",
              ].map((item, i) => (
                <div key={i}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl uppercase font-drone-ranger-pro font-bold">
              Contact us
            </h3>
            <div className="flex items-center gap-2">
              <SolidCirclePhone />
              01234568910
            </div>
            <div className="flex items-center gap-2">
              <Message />
              tymex-talent@tyme.com
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl uppercase font-drone-ranger-pro font-bold">
              Subscribe to receive our latest update
            </h3>
            <div className="flex items-center gap-5">
              <Input placeholder="Your email address" />
              <Button className="h-10">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="pt-[1px] bg-product-card" />
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <span>©2023 Tyme - Edit. All Rights reserved.</span>
          <div className="flex gap-4">
            <div>
              <a href="#">Security</a>
            </div>
            <div>
              <a href="#">Legal</a>
            </div>
            <div>
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
