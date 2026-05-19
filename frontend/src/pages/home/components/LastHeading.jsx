import React from 'react'
import Button from '../../../components/Button'
const LastHeading = () => {
  return (
   <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
  
  {/* BACKGROUND IMAGES */}
  <div className="absolute inset-0 z-0">

    {/* IMAGE 1 */}
    <img
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
      alt=""
      style={{ backfaceVisibility: "hidden" }}
      className="absolute left-[5%] top-[10%] h-52 w-40 rotate-[-12deg] rounded-3xl object-cover opacity-50"
    />

    {/* IMAGE 2 */}
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
      alt=""
      style={{ backfaceVisibility: "hidden" }}
      className="absolute left-[28%] top-[4%] h-60 w-44 rotate-[8deg] rounded-3xl object-cover opacity-45"
    />

    {/* IMAGE 3 */}
    <img
      src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800&auto=format&fit=crop"
      alt=""
      style={{ backfaceVisibility: "hidden" }}
      className="absolute right-[6%] top-[12%] h-56 w-44 rotate-[14deg] rounded-3xl object-cover opacity-50"
    />

    {/* IMAGE 4 */}
    <img
      src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop"
      alt=""
      style={{ backfaceVisibility: "hidden" }}
      className="absolute left-[-2%] top-[42%] h-60 w-44 rotate-[-10deg] rounded-3xl object-cover opacity-40"
    />

    {/* IMAGE 5 */}
    <img
      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
      alt=""
      style={{ backfaceVisibility: "hidden" }}
      className="absolute right-[4%] top-[40%] h-72 w-52 rotate-[10deg] rounded-3xl object-cover opacity-50"
    />

    {/* IMAGE 6 */}
    <img
      src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800&auto=format&fit=crop"
      alt=""
      style={{ backfaceVisibility: "hidden" }}
      className="absolute bottom-[4%] left-[10%] h-56 w-44 rotate-[12deg] rounded-3xl object-cover opacity-40"
    />

    {/* IMAGE 7 */}
    <img
      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop"
      alt=""
      style={{ backfaceVisibility: "hidden" }}
      className="absolute bottom-[2%] left-[62%] h-52 w-40 rotate-[-8deg] rounded-3xl object-cover opacity-45"
    />

    {/* IMAGE 8 */}
    <img
      src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop"
      alt=""
      style={{ backfaceVisibility: "hidden" }}
      className="absolute bottom-[8%] right-[12%] h-56 w-44 rotate-[-14deg] rounded-3xl object-cover opacity-45"
    />

    {/* DARK OVERLAY */}
    {/* <div className="absolute inset-0 bg-black/55"></div> */}

    {/* CENTER GLOW */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.18),transparent_60%)]"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl text-center">
    
    <h1 className="text-5xl font-light leading-tight tracking-tight text-white md:text-7xl">
      Transform Your Learning Journey
      <br />
      Into A Career Breakthrough With
    </h1>

    {/* GLASS TITLE */}
    <div className="mt-6 inline-block rounded-3xl border border-orange-500/20 bg-white/[0.05] px-10 py-4 backdrop-blur-xl">
      <span className="text-5xl font-light text-white md:text-7xl">
        Rao Coding School
      </span>
    </div>

    {/* BUTTON */}
    <div className="mt-10">
      <Button />
    </div>
  </div>
</section>
  )
}

export default LastHeading