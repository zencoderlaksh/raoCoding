import Card from "./components/Card";
import { course } from "../../assets/images";
import TextPressure from "../../components/TextPressure";
import Headings from '../home/components/Headings'
import Difference from '../home/components/Difference'
import FAQ from '../home/components/FAQ'
export default function Courses() {
  return (
    <div>
    <div className="min-h-screen px-4 py-10">
      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
        
        <Card
          image={course}
          title="Data Science and Analytics with GenAI"
          price="6999"
          originalPrice="14891"
          discount="53"
          tags={["Machine Learning", "Deep Learning", "Gen-AI"]}
          link="/course/data-science"
        />

        <Card
          image={course}
          title="Data Science and Analytics with GenAI"
          price="6999"
          originalPrice="14891"
          discount="53"
          tags={["Machine Learning", "Deep Learning", "Gen-AI"]}
          link="/course/data-science"
        />

        <Card
          image={course}
          title="Data Science and Analytics with GenAI"
          price="6999"
          originalPrice="14891"
          discount="53"
          tags={["Machine Learning", "Deep Learning", "Gen-AI"]}
          link="/course/data-science"
        />

        <Card
          image={course}
          title="Data Science and Analytics with GenAI"
          price="6999"
          originalPrice="14891"
          discount="53"
          tags={["Machine Learning", "Deep Learning", "Gen-AI"]}
          link="/course/data-science"
        />

        <Card
          image={course}
          title="Data Science and Analytics with GenAI"
          price="6999"
          originalPrice="14891"
          discount="53"
          tags={["Machine Learning", "Deep Learning", "Gen-AI"]}
          link="/course/data-science"
        />
      </div>
    </div>
    <div>
      <section className="w-full px-4 py-16 sm:py-20 lg:py-28">
      <Headings title="Comparison" desc="What sets Rao Coding School different" descrip="from ordinary Coding Schools."/>
      </section>
      <Difference />
    </div>
    <div>
      <FAQ />
    </div>
    <div className="w-full flex justify-center items-center py-20">
        <div className="relative w-full h-[450px] overflow-hidden">
          <TextPressure
            text="Rao's"
            flex
            width
            weight
            italic
            alpha={false}
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={36}
          />
        </div>
      </div>
    </div>
  );
}