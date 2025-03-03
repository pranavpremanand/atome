import React from "react";
import { services } from "../../data/services";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ArrowLinkButton } from "../ArrowButtons";

const ServicesWeProvide = ({ length }) => {
  const allServices = services.slice(0, length);
  return (
    <div id="services" className="py-[4rem] wrapper">
      <h2 data-aos="fade-up" className="section-heading text-center">
        Services We Provide
      </h2>
      <div data-aos="fade-up" className="mt-10 pb-5 grid md:grid-cols-2 gap-5">
        {allServices.map((item, i) => (
          <Link
            key={item.title}
            to={`/services/${item.title}`}
            className={`group h-full overflow-hidden space-y-6 odd:bg-secondary/70 even:bg-primary/70 odd:hover:bg-primary/70 even:hover:bg-secondary/70 p-5 rounded-xl transition-all duration-300 ${
              i === 2 && "md:order-3"
            }  ${i === 5 && "md:order-6"} ${i === 8 && "md:order-9"} ${
              i === 11 && "md:order-8"
            }`}
          >
            <div className="grid sm:grid-cols-[70%_auto] h-full items-center gap-4">
              <div className="h-full flex flex-col gap-3 justify-between">
                <div className="space-y-3">
                  <p className="text-xl font-medium">{item.title}</p>
                  <img
                    loading="lazy"
                    src={item.image}
                    className="object-contain w-1/2 block sm:hidden"
                    alt={item.title}
                  />
                  <p>{item.shortDesc}</p>
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white text-sm py-2 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <img
                loading="lazy"
                src={item.image}
                className="object-contain sm:block hidden"
                alt={item.title}
              />
            </div>
            <Link
              to={`/services/${item.title}`}
              className="btn rounded lg:translate-y-[5rem] group-hover:translate-y-0 bg-white/40 hover:bg-white hover:shadow-transparent gap-2 w-fit"
            >
              Read More <ArrowRight className="w-5 h-5" />
            </Link>
          </Link>
        ))}
      </div>
      {length ? (
        <ArrowLinkButton to="/services">View All</ArrowLinkButton>
      ) : (
        <ArrowLinkButton to="/contact">Request a quote</ArrowLinkButton>
      )}
    </div>
  );
};

export default ServicesWeProvide;
