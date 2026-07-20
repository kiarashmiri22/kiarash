import { upgradeData } from "@/app/api/data";
import { Icon } from "@iconify/react";
import CodeWindow from "../CodeWindow";

const Upgrade = () => {
  return (
    <section className="py-20" id="upgrade">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-white font-medium">
              What I <span className="text-primary">bring</span>
            </p>
            <h2 className="text-white sm:text-5xl text-3xl  font-medium mb-5">
              Skills across the whole stack
            </h2>
            <p className="text-muted/60 text-lg mb-7">
              From the interface a user touches to the firmware running on a
              microcontroller, I like understanding — and building — the
              whole picture.
            </p>
            <div className="grid sm:grid-cols-2  text-nowrap gap-5">
              {upgradeData.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div>
                    <Icon
                      icon="la:check-circle-solid"
                      width="24"
                      height="24"
                      className="text-white group-hover:text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg text-muted/60">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="ml-0 lg:ml-7">
              <CodeWindow filename="server.py">
                <div className="text-white/80">
                  <span className="text-[#c586c0]">from</span> flask <span className="text-[#c586c0]">import</span> Flask
                </div>
                <div className="text-white/80 mt-2">
                  app = Flask(<span className="text-[#ce9178]">__name__</span>)
                </div>
                <div className="text-white/80 mt-2">
                  <span className="text-[#c586c0]">@app.route</span>(<span className="text-[#ce9178]">&apos;/api/status&apos;</span>)
                </div>
                <div className="text-white/80">
                  <span className="text-[#c586c0]">def</span> status():
                </div>
                <div className="pl-8 text-white/80">
                  <span className="text-[#c586c0]">return</span> {'{'}<span className="text-[#ce9178]">&apos;ok&apos;</span>: <span className="text-[#569cd6]">True</span>{'}'}
                </div>
              </CodeWindow>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
