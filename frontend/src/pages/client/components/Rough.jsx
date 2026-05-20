import React from "react";

const Rough = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 px-[6vw] py-[140px]">
        <div>
          <span className="uppercase tracking-[0.2em] text-[11px] text-[#ff5a28]">
            ✦ CONTACT
          </span>

          {/* <h2 className="mt-5 text-[clamp(48px,7vw,120px)] leading-[0.95] font-serif font-light">
            Have a project
            <br />
            <em>in mind?</em>
          </h2> */}
          <section className="bg-black text-[#f5f1ea] px-6 md:px-14 py-10 md:py-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-14 items-start">
              {/* LEFT SIDE */}
              <div>
                {/* Tag */}
                <div className="flex items-center gap-3 mb-10">
                  <span className="text-[#ff5a28] text-sm">✦</span>

                  <span className="uppercase tracking-[0.45em] text-[11px] text-[#ff5a28] font-medium">
                    Get In Touch
                  </span>
                </div>

                {/* Heading */}
                <h1 className="font-serif font-light leading-[0.82] tracking-[-0.06em] text-[clamp(70px,10vw,170px)]">
                  Have a project
                  <br />
                  <em className="italic font-light">in mind?</em>
                </h1>

                {/* Description */}
                <p className="mt-10 max-w-[650px] text-[#9c9c9c] text-[20px] md:text-[22px] leading-[1.7]">
                  Tell us about it in 4 quick steps. We respond within 48 hours
                  with a tailored proposal — no fluff.
                </p>

                {/* Contact Info */}
                <div className="mt-20 border-t border-white/10">
                  {/* EMAIL */}
                  <div className="grid grid-cols-[100px_1fr] md:grid-cols-[130px_1fr] gap-8 py-10 border-b border-white/10">
                    <span className="uppercase tracking-[0.35em] text-[11px] text-[#666]">
                      Email
                    </span>

                    <a
                      href="mailto:hello@rao.studio"
                      className="font-serif text-[30px] md:text-[52px] leading-none hover:text-[#ff5a28] transition-colors duration-300"
                    >
                      hello@rao.studio
                    </a>
                  </div>

                  {/* BASED */}
                  <div className="grid grid-cols-[100px_1fr] md:grid-cols-[130px_1fr] gap-8 py-10 border-b border-white/10">
                    <span className="uppercase tracking-[0.35em] text-[11px] text-[#666]">
                      Based
                    </span>

                    <h3 className="font-serif text-[30px] md:text-[52px] leading-none">
                      Bengaluru, IN
                    </h3>
                  </div>

                  {/* SOCIAL */}
                  <div className="grid grid-cols-[100px_1fr] md:grid-cols-[130px_1fr] gap-8 py-10 border-b border-white/10">
                    <span className="uppercase tracking-[0.35em] text-[11px] text-[#666]">
                      Social
                    </span>

                    <a
                      href="#"
                      className="font-serif text-[30px] md:text-[52px] leading-none hover:text-[#ff5a28] transition-colors duration-300"
                    >
                      @rao.studio
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE FORM */}
              <div className="relative rounded-[34px] border border-white/10 bg-[#050505] p-8 md:p-12 min-h-[760px] flex flex-col justify-between">
                {/* Progress */}
                <div className="flex gap-3">
                  <span className="h-[10px] w-[56px] rounded-full bg-[#ff5a28]" />
                  <span className="h-[10px] w-[40px] rounded-full bg-white/10" />
                  <span className="h-[10px] w-[40px] rounded-full bg-white/10" />
                  <span className="h-[10px] w-[40px] rounded-full bg-white/10" />
                </div>

                {/* Form Content */}
                <div className="mt-20">
                  <span className="uppercase tracking-[0.38em] text-[12px] text-[#ff5a28]">
                    01 — What's your name?
                  </span>

                  <div className="mt-16">
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full bg-transparent border-b border-white/10 pb-8 text-[40px] md:text-[58px] font-serif text-white placeholder:text-white/20 outline-none"
                    />
                  </div>
                </div>

                {/* Bottom */}
                <div>
                  {/* Buttons */}
                  <div className="flex items-center justify-between">
                    <button className="h-[74px] px-10 rounded-full border border-white/10 text-white/30 text-xl hover:text-white transition">
                      ← Back
                    </button>

                    <button className="h-[74px] px-12 rounded-full bg-[#ff5a28] text-black text-2xl font-medium hover:scale-[1.03] transition-transform">
                      Next →
                    </button>
                  </div>

                  {/* Footer Text */}
                  <div className="mt-14 text-center uppercase tracking-[0.35em] text-[10px] text-white/20">
                    No commitment · NDA available · 48h response
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-[#121212] border border-white/10 rounded-[24px] p-10">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div>
                <div className="text-6xl text-[#ff5a28]">✓</div>

                <h3 className="mt-6 text-3xl font-serif">Message received.</h3>
              </motion.div>
            ) : (
              <motion.div className="flex flex-col gap-5">
                {step === 0 && (
                  <>
                    <span className="uppercase tracking-[0.2em] text-[11px] text-[#ff5a28]">
                      Your Name
                    </span>

                    <input
                      placeholder="John Doe"
                      className="bg-transparent border-b border-white/20 pb-4 text-3xl outline-none"
                    />
                  </>
                )}

                {step === 1 && (
                  <>
                    <span className="uppercase tracking-[0.2em] text-[11px] text-[#ff5a28]">
                      Email
                    </span>

                    <input
                      placeholder="hello@email.com"
                      className="bg-transparent border-b border-white/20 pb-4 text-3xl outline-none"
                    />
                  </>
                )}

                {step === 2 && (
                  <>
                    <span className="uppercase tracking-[0.2em] text-[11px] text-[#ff5a28]">
                      Budget
                    </span>

                    <div className="flex flex-wrap gap-3">
                      {["<10k", "10-25k", "25-50k", "50k+"].map((b) => (
                        <button
                          key={b}
                          className="px-5 py-3 rounded-full border border-white/10"
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <span className="uppercase tracking-[0.2em] text-[11px] text-[#ff5a28]">
                      Project Details
                    </span>

                    <textarea
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="bg-transparent border-b border-white/20 pb-4 text-2xl outline-none"
                    />
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {!sent && (
            <div className="flex justify-between mt-10">
              <button
                onClick={() => setStep((s) => Math.max(s - 1, 0))}
                className="px-7 py-4 rounded-full border border-white/15"
              >
                ← Back
              </button>

              {step < 3 ? (
                <button
                  onClick={() => setStep((s) => Math.min(s + 1, 3))}
                  className="px-7 py-4 rounded-full bg-[#ff5a28] text-black"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={() => setSent(true)}
                  className="px-7 py-4 rounded-full bg-[#ff5a28] text-black"
                >
                  Send →
                </button>
              )}
            </div>
          )}
        </div>
      </section>


      {/* next */}
      <section className="w-full  lg:w-[98%] mx-auto bg-black text-[#f3efe8] px-6 md:px-10 lg:px-14 py-10 md:py-14 overflow-hidden">
  <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-12 items-center">

    {/* LEFT SIDE */}
    <div className="pt-2">

      {/* LABEL */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-[#ff5a28] text-sm">
          ✦
        </span>

        <span className="uppercase tracking-[0.42em] text-[11px] text-[#ff5a28] font-medium">
          Get In Touch
        </span>
      </div>

      {/* HEADING */}
      <h1 className="font-serif font-light leading-[0.9] tracking-[-0.05em] text-[clamp(52px,7vw,120px)]">
        Have a project
        <br />

        <em className="italic font-light">
          in mind?
        </em>
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-10 max-w-[540px] text-[#8d8d8d] text-[18px] md:text-[22px] leading-[1.7]">
        Tell us about it in 4 quick steps. We respond within
        48 hours with a tailored proposal — no fluff.
      </p>

      {/* INFO ROWS */}
      <div className="mt-20 border-t border-white/10 space-y-4">

        {/* EMAIL */}
        <div className="grid grid-cols-[90px_1fr] md:grid-cols-[130px_1fr] border-b border-white/10">
          <span className="uppercase tracking-[0.35em] text-[10px] text-[#666]">
            Email
          </span>

          <a
            href="mailto:laksh@rao.studio"
            className="font-serif text-[26px] md:text-[42px] leading-none hover:text-[#ff5a28] transition-colors duration-300"
          >
            laksh@rao.studio
          </a>
        </div>

        {/* LOCATION */}
        <div className="grid grid-cols-[90px_1fr] md:grid-cols-[130px_1fr]  border-b border-white/10">
          <span className="uppercase tracking-[0.35em] text-[10px] text-[#666]">
            Based
          </span>

          <h3 className="font-serif text-[26px] md:text-[42px] leading-none">
            Jaipur, IN
          </h3>
        </div>

        {/* SOCIAL */}
        <div className="grid grid-cols-[90px_1fr] md:grid-cols-[130px_1fr]  border-b border-white/10">
          <span className="uppercase tracking-[0.35em] text-[10px] text-[#666]">
            Social
          </span>

          <a
            href="#"
            className="font-serif text-[26px] md:text-[42px] leading-none hover:text-[#ff5a28] transition-colors duration-300"
          >
            @rao.studio
          </a>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="relative rounded-[32px] border border-white/10 bg-[#050505] min-h-[680px] px-8 md:px-10 py-8 md:py-10 flex flex-col justify-between">

      {/* TOP PROGRESS */}
      <div className="flex gap-3">
        <span className="h-[8px] w-[56px] rounded-full bg-[#ff5a28]" />
        <span className="h-[8px] w-[40px] rounded-full bg-white/10" />
        <span className="h-[8px] w-[40px] rounded-full bg-white/10" />
        <span className="h-[8px] w-[40px] rounded-full bg-white/10" />
      </div>

      {/* FORM */}
      <div className="mt-6 flex-1 flex flex-col justify-center">

        <span className="uppercase tracking-[0.35em] text-[11px] text-[#ff5a28]">
          01 — What's your name?
        </span>

        <div className="mt-14">
          <input
            type="text"
            placeholder="John Doe"
            className="w-full bg-transparent border-b border-white/10 pb-6 text-[38px] md:text-[56px] font-serif font-light text-white placeholder:text-white/25 outline-none"
          />
        </div>
      </div>

      {/* BUTTONS */}
      <div className="pt-10">

        <div className="flex items-center justify-between">

          <button className="h-[64px] px-8 rounded-full border border-white/10 text-white/40 text-[18px] hover:text-white transition-all duration-300">
            ← Back
          </button>

          <button className="h-[64px] px-10 rounded-full bg-[#ff5a28] text-black text-[18px] font-medium hover:scale-[1.03] transition-transform duration-300">
            Next →
          </button>
        </div>

        <div className="mt-12 text-center uppercase tracking-[0.35em] text-[9px] text-white/20">
          No commitment · NDA available · 48h response
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Rough;
