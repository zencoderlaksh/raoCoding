import {
  CheckCircle2,
  XCircle,
  Layers3,
} from "lucide-react"
import {tiger} from "../../../assets/images"
export default function Difference() {
  return (
    <section className="w-full px-6 py-14 flex items-center justify-center">
      <div className="relative w-full max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="relative overflow-hidden rounded-[28px] border border-green-500/40 bg-white/[0.03] p-10 shadow-[0_0_40px_rgba(34,197,94,0.28)]">

            {/* Glass Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent"></div>

            {/* Header */}
            <div className="relative z-10 flex items-center">
              
              {/* YOUR LOGO */}
                <img
                  src={tiger}
                  alt="logo"
                  className="h-24"
                />

              {/* BRAND NAME */}
              <div>
                <h2 className="text-4xl font-semibold tracking-tight text-white">
                  Rao Coding School
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                  Learn Better • Build Faster
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="relative z-10 mt-12 space-y-8">

              {[
                "Highly Affordable, No Quality Cuts",
                "Project-Based, Skill-First Learning",
                "Continuously Updated Industry Trends",
                "Hackathons, Challenges & Face-Offs",
                "Industry-Relevant Job-Oriented Curriculum",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="h-7 w-7 text-green-500" />
                  </div>

                  <p className="text-2xl leading-relaxed text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-10">

            {/* Header */}
            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <Layers3 className="h-9 w-9 text-white" />
              </div>

              <div>
                <h2 className="text-4xl font-semibold text-white">
                  Others
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Traditional Platforms
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="mt-12 space-y-8">

              {[
                "High Fees With Compromised Quality",
                "Theory-Centric Learning",
                "Outdated Static Curriculum",
                "No Competitive Learning Environment",
                "Limited Practical Exposure",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1">
                    <XCircle className="h-7 w-7 text-orange-500" />
                  </div>

                  <p className="text-2xl leading-relaxed text-zinc-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OUTER GLASS SHINE */}
        <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/5"></div>
      </div>
    </section>
  )
}