import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const projects = [
  {
    title: "Elegent Hospitality",
    category: "Event Staff Management",
    tools: "React Native, Node.js, TypeScript",
    image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&h=600&fit=crop",
    link: "https://github.com/exofttechnologies/Catering-App",
    playStore: "https://play.google.com/store/apps/details?id=com.exoft.elegent&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/elegent-hospitality/id6764536902",
  },
  {
    title: "JobSeeker",
    category: "Part-Time Job Platform",
    tools: "Flutter, Dart",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    title: "Diagnova",
    category: "ML-Based Health Prediction",
    tools: "Machine Learning, Prediction System",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            style={{ marginTop: "12px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                          >
                            View on GitHub <MdArrowOutward />
                          </a>
                        )}
                        {(project.playStore || project.appStore) && (
                          <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                            {project.playStore && (
                              <a
                                href={project.playStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Download on Play Store"
                                style={{ fontSize: "20px", cursor: "pointer" }}
                              >
                                <FaGooglePlay />
                              </a>
                            )}
                            {project.appStore && (
                              <a
                                href={project.appStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Download on App Store"
                                style={{ fontSize: "20px", cursor: "pointer" }}
                              >
                                <FaApple />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
