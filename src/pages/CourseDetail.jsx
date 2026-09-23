
import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  MonitorSmartphone,
  CheckCircle2,
  Download,
  Loader2,
  Play,
} from "lucide-react";

import SEO from "../components/SEO.jsx";
import Tag from "../components/Tag.jsx";
import CourseCard from "../components/CourseCard.jsx";
import { courses, formLinks } from "../data/data.js";
import { generateSyllabusPdf } from "../utils/generateSyllabusPdf.js";

/*
 * Convert different YouTube URL formats
 * into a YouTube embed URL.
 */
const getYouTubeEmbedUrl = (url) => {
  try {
    const parsedUrl = new URL(url);

    // Example:
    // https://youtu.be/VIDEO_ID
    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.slice(1).split("/")[0];

      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}`;
      }
    }

    // Example:
    // https://www.youtube.com/watch?v=VIDEO_ID
    if (parsedUrl.hostname.includes("youtube.com")) {
      // YouTube Shorts
      if (parsedUrl.pathname.startsWith("/shorts/")) {
        const videoId = parsedUrl.pathname
          .split("/shorts/")[1]
          ?.split("/")[0];

        if (videoId) {
          return `https://www.youtube-nocookie.com/embed/${videoId}`;
        }
      }

      // Normal YouTube video
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}`;
      }
    }

    return null;
  } catch {
    return null;
  }
};

export default function CourseDetail() {
  const { courseId } = useParams();

  const course = courses.find((c) => c.id === courseId);

  const [downloading, setDownloading] = useState(false);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const related = courses
    .filter(
      (c) => c.id !== course.id && c.category === course.category
    )
    .slice(0, 3);

  const isComingSoon = course.tags?.includes("Coming Soon");

  const handleDownload = async () => {
    setDownloading(true);

    try {
      await generateSyllabusPdf(course);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <SEO
        title={course.title}
        description={course.shortDescription}
      />

      <div className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-16">

        {/* Back button */}
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={15} />
          Back to all courses
        </Link>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div className="flex-1">

            {/* Course category */}
            <span className="eyebrow">
              {course.category}
            </span>

            {/* Course title */}
            <h1 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
              {course.title}
            </h1>

            {/* Tags */}
            {course.tags?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <Tag
                    key={tag}
                    label={tag}
                  />
                ))}
              </div>
            )}

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              {course.shortDescription}
            </p>

            {/* Course information */}
            <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-border-soft bg-surface p-5 sm:max-w-md">

              <div>
                <Clock
                  size={16}
                  className="text-accent"
                />

                <p className="mt-2 text-sm font-semibold text-text">
                  {course.duration}
                </p>

                <p className="text-xs text-muted">
                  Duration
                </p>
              </div>

              <div>
                <Users
                  size={16}
                  className="text-accent"
                />

                <p className="mt-2 text-sm font-semibold text-text">
                  {course.ageGroup}
                </p>

                <p className="text-xs text-muted">
                  Age group
                </p>
              </div>

              <div>
                <MonitorSmartphone
                  size={16}
                  className="text-accent"
                />

                <p className="mt-2 text-sm font-semibold text-text">
                  {course.mode}
                </p>

                <p className="text-xs text-muted">
                  Mode
                </p>
              </div>

            </div>

            {/* =====================================================
                WHAT YOU'LL LEARN
            ====================================================== */}
            <div className="mt-10">

              <div className="flex flex-wrap items-center justify-between gap-3">

                <h2 className="font-display text-xl font-semibold text-text">
                  What you'll learn in this course
                </h2>

                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="inline-flex items-center gap-2 rounded-full border border-border-soft px-4 py-2 text-xs font-semibold text-text transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {downloading ? (
                    <>
                      <Loader2
                        size={14}
                        className="animate-spin"
                      />
                      Preparing...
                    </>
                  ) : (
                    <>
                      <Download size={14} />
                      Download Syllabus (PDF)
                    </>
                  )}
                </button>

              </div>

              {/* Weekly learning */}
              {course.learn?.length > 0 ? (

                <div className="border-t border-white/10">

                  {course.learn.map((item) => (

                    <details
                      key={item.week}
                      className="group border-b border-white/10"
                    >

                      <summary className="flex cursor-pointer list-none items-baseline gap-5 py-4 font-semibold text-white [&::-webkit-details-marker]:hidden">

                        <span className="min-w-[4.5rem] font-medium text-white/60">
                          {item.week}
                        </span>

                        <span>
                          {item.title}
                        </span>

                        <span className="ml-auto text-2xl leading-none text-blue-400 group-open:hidden">
                          +
                        </span>

                        <span className="ml-auto hidden text-2xl leading-none text-blue-400 group-open:inline">
                          –
                        </span>

                      </summary>

                      <p className="max-w-2xl pb-5 text-white/60">
                        {item.topics}
                      </p>

                    </details>

                  ))}

                </div>

              ) : (

                <ul className="mt-4 space-y-3">

                  {course.Syllabus?.map((item, index) => (

                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                    >

                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-accent"
                      />

                      {item}

                    </li>

                  ))}

                </ul>

              )}

            </div>

            {/* =====================================================
                DEMO VIDEOS
                Automatically appears only when demoVideos exists
            ====================================================== */}
            {course.demoVideos?.length > 0 && (

              <section className="mt-14">

                {/* Section heading */}
                <div className="mb-6">

                  <span className="eyebrow">
                    Course Preview
                  </span>

                  <h2 className="mt-2 font-display text-2xl font-semibold text-text">
                    Watch Demo Classes
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    Get a preview of our teaching style and course content before you enroll.
                  </p>

                </div>

                {/* Videos */}
                <div className="grid gap-6 md:grid-cols-2">

                  {course.demoVideos
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((video, index) => {

                      const embedUrl =
                        getYouTubeEmbedUrl(video);

                      if (!embedUrl) {
                        return null;
                      }

                      return (

                        <div
                          key={`${video}-${index}`}
                          className="overflow-hidden rounded-2xl border border-border-soft bg-surface"
                        >

                          {/* YouTube player */}
                          <div className="aspect-video w-full bg-black">

                            <iframe
                              src={embedUrl}
                              title={`Demo Class ${index + 1}`}
                              className="h-full w-full"
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />

                          </div>

                          {/* Video information */}
                          <div className="p-5">

                            <div className="flex items-center gap-2">

                              <Play
                                size={14}
                                className="fill-current text-accent"
                              />

                              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                                Free Preview
                              </span>

                            </div>

                            <h3 className="mt-2 font-display text-lg font-semibold text-text">
                              Demo Class {index + 1}
                            </h3>

                            <p className="mt-1 text-sm leading-relaxed text-muted">
                              Watch this sample lesson to get a preview of the course.
                            </p>

                          </div>

                        </div>

                      );

                    })}

                </div>

              </section>

            )}

          </div>

          {/* =====================================================
              RIGHT SIDE - PRICE
          ====================================================== */}
          <aside className="w-full shrink-0 rounded-2xl border border-border-soft bg-surface p-6 lg:w-80">

            <p className="eyebrow">
              Price
            </p>

            {isComingSoon ? (

              <p className="mt-2 font-display text-2xl font-semibold text-text">
                Announced soon
              </p>

            ) : (

              <div className="mt-2 flex items-baseline gap-2">

                {course.originalPrice && (

                  <span className="font-mono text-sm text-muted line-through">
                    ₹{course.originalPrice.toLocaleString("en-IN")}
                  </span>

                )}

                <span className="font-display text-3xl font-semibold text-text">
                  ₹{course.price?.toLocaleString("en-IN")}
                </span>

              </div>

            )}

            {/* Enroll */}
            <a
              href={formLinks.enrollNow}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              {isComingSoon
                ? "Join the waitlist"
                : "Enroll Now"}

              <ArrowRight size={16} />
            </a>

            {/* Download PDF */}
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-border-soft px-5 py-3.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
            >

              {downloading ? (
                <>
                  <Loader2
                    size={15}
                    className="animate-spin"
                  />
                  Preparing PDF...
                </>
              ) : (
                <>
                  <Download size={15} />
                  Download Syllabus (PDF)
                </>
              )}

            </button>

            <p className="mt-3 text-center text-xs text-muted">
              Opens a secure Google Form. Your details go directly to our team.
            </p>

          </aside>

        </div>

        {/* =====================================================
            RELATED COURSES
        ====================================================== */}
        {related.length > 0 && (

          <div className="mt-16 border-t border-border-soft pt-12">

            <h2 className="font-display text-xl font-semibold text-text">
              More in {course.category}
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {related.map((relatedCourse) => (

                <CourseCard
                  key={relatedCourse.id}
                  course={relatedCourse}
                />

              ))}

            </div>

          </div>

        )}

      </div>
    </>
  );
}