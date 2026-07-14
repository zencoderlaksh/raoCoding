import { cn } from "@/lib/utils"
import Marquee from "../../../components/ui/marquee"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Md Shahzad",
    role: "Coding Mentor",
    body: "We Proudly Share Our Teaching Journey With Rao Coding School, Helping Students Build Future-Ready Skills.",
    img: "https://i.pravatar.cc/150?img=12",
    rating: "4.2",
  },
  {
    name: "Ekta Poonia",
    role: "Frontend Mentor",
    body: "Amazing learning experience with practical projects and real-world development guidance.",
    img: "https://i.pravatar.cc/150?img=15",
    rating: "4.8",
  },
  {
    name: "Sonam",
    role: "UI/UX Mentor",
    body: "Students love the interactive sessions and hands-on project-based teaching approach.",
    img: "https://i.pravatar.cc/150?img=20",
    rating: "4.7",
  },
  {
    name: "Neeraj",
    role: "Backend Mentor",
    body: "Focused on building strong fundamentals with modern backend technologies.",
    img: "https://i.pravatar.cc/150?img=25",
    rating: "4.6",
  },
  {
    name: "Shruti Singhal",
    role: "DSA Mentor",
    body: "Helping students crack coding interviews with consistency and structured learning.",
    img: "https://i.pravatar.cc/150?img=32",
    rating: "4.9",
  },
  {
    name: "Shubham Jakhar",
    role: "Full Stack Mentor",
    body: "Real-world projects and mentorship that actually prepares students for industry.",
    img: "https://i.pravatar.cc/150?img=45",
    rating: "4.8",
  },
  {
    name: "Kritika",
    role: "Full Stack Mentor",
    body: "Real-world projects and mentorship that actually prepares students for industry.",
    img: "https://i.pravatar.cc/150?img=45",
    rating: "4.8",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  role,
  body,
  rating,
}) => {
  return (
    <figure
      className={cn(
  "relative mx-4 h-[280px] w-[560px] overflow-hidden rounded-3xl border border-white/10",
  "bg-[#120404] p-7 backdrop-blur-xl transition-all duration-300",
  "hover:scale-[1.02] hover:border-red-500/20"
)}
    >
      {/* Profile */}
      <div className="flex items-center gap-4">
        <img
          className="h-16 w-16 rounded-full object-cover"
          width="64"
          height="64"
          alt={name}
          src={img}
        />

        <div className="flex flex-col">
          <figcaption className="text-2xl font-semibold text-white">
            {name}
          </figcaption>

          <p className="text-lg text-gray-400">
            {role}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-[1px] w-full bg-white/10"></div>

      {/* Rating */}
      <div className="mb-5 flex items-center gap-2">
        <span className="text-xl text-gray-300">
          {rating}
        </span>

        <div className="flex items-center gap-1 text-yellow-400">
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
        </div>
      </div>

      {/* Text */}
      <blockquote className="text-xl leading-[40px] text-white/90">
        {body}
      </blockquote>
    </figure>
  )
}

export default function CardMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      {/* First Row */}
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review) => (
          <ReviewCard
            key={review.name}
            {...review}
          />
        ))}
      </Marquee>

      {/* Second Row */}
      <Marquee
        reverse
        pauseOnHover
        className="mt-8 [--duration:25s]"
      >
        {secondRow.map((review) => (
          <ReviewCard
            key={review.name}
            {...review}
          />
        ))}
      </Marquee>
    </div>
  )
}