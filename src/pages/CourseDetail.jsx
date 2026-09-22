// // import { useParams, Link, Navigate } from "react-router-dom";
// // import { ArrowLeft, ArrowRight, Clock, Users, MonitorSmartphone, CheckCircle2 } from "lucide-react";
// // import SEO from "../components/SEO.jsx";
// // import Tag from "../components/Tag.jsx";
// // import CourseCard from "../components/CourseCard.jsx";
// // import { courses, formLinks } from "../data/data.js";

// // export default function CourseDetail() {
// //   const { courseId } = useParams();
// //   const course = courses.find((c) => c.id === courseId);

// //   if (!course) {
// //     return <Navigate to="/courses" replace />;
// //   }

// //   const related = courses
// //     .filter((c) => c.id !== course.id && c.category === course.category)
// //     .slice(0, 3);

// //   const isComingSoon = course.tags?.includes("Coming Soon");

// //   return (
// //     <>
// //       <SEO title={course.title} description={course.shortDescription} />

// //       <div className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-16">
// //         <Link
// //           to="/courses"
// //           className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
// //         >
// //           <ArrowLeft size={15} /> Back to all courses
// //         </Link>

// //         <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start">
// //           <div className="flex-1">
// //             <span className="eyebrow">{course.category}</span>
// //             <h1 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
// //               {course.title}
// //             </h1>

// //             {course.tags?.length > 0 && (
// //               <div className="mt-4 flex flex-wrap gap-2">
// //                 {course.tags.map((t) => (
// //                   <Tag key={t} label={t} />
// //                 ))}
// //               </div>
// //             )}

// //             <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
// //               {course.shortDescription}
// //             </p>

// //             <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-border-soft bg-surface p-5 sm:max-w-md">
// //               <div>
// //                 <Clock size={16} className="text-accent" />
// //                 <p className="mt-2 text-sm font-semibold text-text">{course.duration}</p>
// //                 <p className="text-xs text-muted">Duration</p>
// //               </div>
// //               <div>
// //                 <Users size={16} className="text-accent" />
// //                 <p className="mt-2 text-sm font-semibold text-text">{course.ageGroup}</p>
// //                 <p className="text-xs text-muted">Age group</p>
// //               </div>
// //               <div>
// //                 <MonitorSmartphone size={16} className="text-accent" />
// //                 <p className="mt-2 text-sm font-semibold text-text">{course.mode}</p>
// //                 <p className="text-xs text-muted">Mode</p>
// //               </div>
// //             </div>

// //             <div className="mt-10">
// //               <h2 className="font-display text-xl font-semibold text-text">Syllabus</h2>
// //               <ul className="mt-4 space-y-3">
// //                 {course.Syllabus.map((item, i) => (
// //                   <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
// //                     <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
// //                     {item}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </div>

// //           <aside className="w-full shrink-0 rounded-2xl border border-border-soft bg-surface p-6 lg:w-80">
// //             <p className="eyebrow">Price</p>
// //             {isComingSoon ? (
// //               <p className="mt-2 font-display text-2xl font-semibold text-text">
// //                 Announced soon
// //               </p>
// //             ) : (
// //               <div className="mt-2 flex items-baseline gap-2">
// //                 {course.originalPrice && (
// //                   <span className="font-mono text-sm text-muted line-through">
// //                     ₹{course.originalPrice.toLocaleString("en-IN")}
// //                   </span>
// //                 )}
// //                 <span className="font-display text-3xl font-semibold text-text">
// //                   ₹{course.price.toLocaleString("en-IN")}
// //                 </span>
// //               </div>
// //             )}

// //             <a
// //               href={formLinks.enrollNow}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
// //             >
// //               {isComingSoon ? "Join the waitlist" : "Enroll Now"} <ArrowRight size={16} />
// //             </a>
// //             <p className="mt-3 text-center text-xs text-muted">
// //               Opens a secure Google Form. Your details go directly to our team.
// //             </p>
// //           </aside>
// //         </div>

// //         {related.length > 0 && (
// //           <div className="mt-16 border-t border-border-soft pt-12">
// //             <h2 className="font-display text-xl font-semibold text-text">
// //               More in {course.category}
// //             </h2>
// //             <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //               {related.map((c) => (
// //                 <CourseCard key={c.id} course={c} />
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </>
// //   );
// // }



// import { useState } from "react";
// import { useParams, Link, Navigate } from "react-router-dom";
// import { ArrowLeft, ArrowRight, Clock, Users, MonitorSmartphone, CheckCircle2, Download, Loader2 } from "lucide-react";
// import SEO from "../components/SEO.jsx";
// import Tag from "../components/Tag.jsx";
// import CourseCard from "../components/CourseCard.jsx";
// import { courses, formLinks } from "../data/data.js";
// import { generateSyllabusPdf } from "../utils/generateSyllabusPdf.js";

// export default function CourseDetail() {
//   const { courseId } = useParams();
//   const course = courses.find((c) => c.id === courseId);
//   const [downloading, setDownloading] = useState(false);

//   if (!course) {
//     return <Navigate to="/courses" replace />;
//   }

//   const related = courses
//     .filter((c) => c.id !== course.id && c.category === course.category)
//     .slice(0, 3);

//   const isComingSoon = course.tags?.includes("Coming Soon");

//   const handleDownload = async () => {
//     setDownloading(true);
//     try {
//       await generateSyllabusPdf(course);
//     } finally {
//       setDownloading(false);
//     }
//   };

//   return (
//     <>
//       <SEO title={course.title} description={course.shortDescription} />

//       <div className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-16">
//         <Link
//           to="/courses"
//           className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
//         >
//           <ArrowLeft size={15} /> Back to all courses
//         </Link>

//         <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start">
//           <div className="flex-1">
//             <span className="eyebrow">{course.category}</span>
//             <h1 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
//               {course.title}
//             </h1>

//             {course.tags?.length > 0 && (
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {course.tags.map((t) => (
//                   <Tag key={t} label={t} />
//                 ))}
//               </div>
//             )}

//             <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
//               {course.shortDescription}
//             </p>

//             <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-border-soft bg-surface p-5 sm:max-w-md">
//               <div>
//                 <Clock size={16} className="text-accent" />
//                 <p className="mt-2 text-sm font-semibold text-text">{course.duration}</p>
//                 <p className="text-xs text-muted">Duration</p>
//               </div>
//               <div>
//                 <Users size={16} className="text-accent" />
//                 <p className="mt-2 text-sm font-semibold text-text">{course.ageGroup}</p>
//                 <p className="text-xs text-muted">Age group</p>
//               </div>
//               <div>
//                 <MonitorSmartphone size={16} className="text-accent" />
//                 <p className="mt-2 text-sm font-semibold text-text">{course.mode}</p>
//                 <p className="text-xs text-muted">Mode</p>
//               </div>
//             </div>

//             <div className="mt-10">
//               <div className="flex flex-wrap items-center justify-between gap-3">
//                 <h2 className="font-display text-xl font-semibold text-text">What you'll learn in this course
//                 </h2>
//                 <button
//                   onClick={handleDownload}
//                   disabled={downloading}
//                   className="inline-flex items-center gap-2 rounded-full border border-border-soft px-4 py-2 text-xs font-semibold text-text transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {downloading ? (
//                     <>
//                       <Loader2 size={14} className="animate-spin" /> Preparing...
//                     </>
//                   ) : (
//                     <>
//                       <Download size={14} /> Download Syllabus (PDF)
//                     </>
//                   )}
//                 </button>
//               </div>
//               <ul className="mt-4 space-y-3">
//                 {course.Syllabus.map((item, i) => (
//                   <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
//                     <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <aside className="w-full shrink-0 rounded-2xl border border-border-soft bg-surface p-6 lg:w-80">
//             <p className="eyebrow">Price</p>
//             {isComingSoon ? (
//               <p className="mt-2 font-display text-2xl font-semibold text-text">
//                 Announced soon
//               </p>
//             ) : (
//               <div className="mt-2 flex items-baseline gap-2">
//                 {course.originalPrice && (
//                   <span className="font-mono text-sm text-muted line-through">
//                     ₹{course.originalPrice.toLocaleString("en-IN")}
//                   </span>
//                 )}
//                 <span className="font-display text-3xl font-semibold text-text">
//                   ₹{course.price.toLocaleString("en-IN")}
//                 </span>
//               </div>
//             )}

//             <a
//               href={formLinks.enrollNow}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
//             >
//               {isComingSoon ? "Join the waitlist" : "Enroll Now"} <ArrowRight size={16} />
//             </a>
//             <button
//               onClick={handleDownload}
//               disabled={downloading}
//               className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-border-soft px-5 py-3.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {downloading ? (
//                 <>
//                   <Loader2 size={15} className="animate-spin" /> Preparing PDF...
//                 </>
//               ) : (
//                 <>
//                   <Download size={15} /> Download Syllabus (PDF)
//                 </>
//               )}
//             </button>
//             <p className="mt-3 text-center text-xs text-muted">
//               Opens a secure Google Form. Your details go directly to our team.
//             </p>
//           </aside>
//         </div>

//         {related.length > 0 && (
//           <div className="mt-16 border-t border-border-soft pt-12">
//             <h2 className="font-display text-xl font-semibold text-text">
//               More in {course.category}
//             </h2>
//             <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {related.map((c) => (
//                 <CourseCard key={c.id} course={c} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }



// import { useParams, Link, Navigate } from "react-router-dom";
// import { ArrowLeft, ArrowRight, Clock, Users, MonitorSmartphone, CheckCircle2 } from "lucide-react";
// import SEO from "../components/SEO.jsx";
// import Tag from "../components/Tag.jsx";
// import CourseCard from "../components/CourseCard.jsx";
// import { courses, formLinks } from "../data/data.js";

// export default function CourseDetail() {
//   const { courseId } = useParams();
//   const course = courses.find((c) => c.id === courseId);

//   if (!course) {
//     return <Navigate to="/courses" replace />;
//   }

//   const related = courses
//     .filter((c) => c.id !== course.id && c.category === course.category)
//     .slice(0, 3);

//   const isComingSoon = course.tags?.includes("Coming Soon");

//   return (
//     <>
//       <SEO title={course.title} description={course.shortDescription} />

//       <div className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-16">
//         <Link
//           to="/courses"
//           className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
//         >
//           <ArrowLeft size={15} /> Back to all courses
//         </Link>

//         <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start">
//           <div className="flex-1">
//             <span className="eyebrow">{course.category}</span>
//             <h1 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
//               {course.title}
//             </h1>

//             {course.tags?.length > 0 && (
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {course.tags.map((t) => (
//                   <Tag key={t} label={t} />
//                 ))}
//               </div>
//             )}

//             <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
//               {course.shortDescription}
//             </p>

//             <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-border-soft bg-surface p-5 sm:max-w-md">
//               <div>
//                 <Clock size={16} className="text-accent" />
//                 <p className="mt-2 text-sm font-semibold text-text">{course.duration}</p>
//                 <p className="text-xs text-muted">Duration</p>
//               </div>
//               <div>
//                 <Users size={16} className="text-accent" />
//                 <p className="mt-2 text-sm font-semibold text-text">{course.ageGroup}</p>
//                 <p className="text-xs text-muted">Age group</p>
//               </div>
//               <div>
//                 <MonitorSmartphone size={16} className="text-accent" />
//                 <p className="mt-2 text-sm font-semibold text-text">{course.mode}</p>
//                 <p className="text-xs text-muted">Mode</p>
//               </div>
//             </div>

//             <div className="mt-10">
//               <h2 className="font-display text-xl font-semibold text-text">Syllabus</h2>
//               <ul className="mt-4 space-y-3">
//                 {course.Syllabus.map((item, i) => (
//                   <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
//                     <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <aside className="w-full shrink-0 rounded-2xl border border-border-soft bg-surface p-6 lg:w-80">
//             <p className="eyebrow">Price</p>
//             {isComingSoon ? (
//               <p className="mt-2 font-display text-2xl font-semibold text-text">
//                 Announced soon
//               </p>
//             ) : (
//               <div className="mt-2 flex items-baseline gap-2">
//                 {course.originalPrice && (
//                   <span className="font-mono text-sm text-muted line-through">
//                     ₹{course.originalPrice.toLocaleString("en-IN")}
//                   </span>
//                 )}
//                 <span className="font-display text-3xl font-semibold text-text">
//                   ₹{course.price.toLocaleString("en-IN")}
//                 </span>
//               </div>
//             )}

//             <a
//               href={formLinks.enrollNow}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
//             >
//               {isComingSoon ? "Join the waitlist" : "Enroll Now"} <ArrowRight size={16} />
//             </a>
//             <p className="mt-3 text-center text-xs text-muted">
//               Opens a secure Google Form. Your details go directly to our team.
//             </p>
//           </aside>
//         </div>

//         {related.length > 0 && (
//           <div className="mt-16 border-t border-border-soft pt-12">
//             <h2 className="font-display text-xl font-semibold text-text">
//               More in {course.category}
//             </h2>
//             <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {related.map((c) => (
//                 <CourseCard key={c.id} course={c} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }



import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Users, MonitorSmartphone, CheckCircle2, Download, Loader2 } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Tag from "../components/Tag.jsx";
import CourseCard from "../components/CourseCard.jsx";
import { courses, formLinks } from "../data/data.js";
import { generateSyllabusPdf } from "../utils/generateSyllabusPdf.js";

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);
  const [downloading, setDownloading] = useState(false);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const related = courses
    .filter((c) => c.id !== course.id && c.category === course.category)
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
      <SEO title={course.title} description={course.shortDescription} />

      <div className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-16">
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={15} /> Back to all courses
        </Link>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="flex-1">
            <span className="eyebrow">{course.category}</span>
            <h1 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
              {course.title}
            </h1>

            {course.tags?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {course.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            )}

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              {course.shortDescription}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-border-soft bg-surface p-5 sm:max-w-md">
              <div>
                <Clock size={16} className="text-accent" />
                <p className="mt-2 text-sm font-semibold text-text">{course.duration}</p>
                <p className="text-xs text-muted">Duration</p>
              </div>
              <div>
                <Users size={16} className="text-accent" />
                <p className="mt-2 text-sm font-semibold text-text">{course.ageGroup}</p>
                <p className="text-xs text-muted">Age group</p>
              </div>
              <div>
                <MonitorSmartphone size={16} className="text-accent" />
                <p className="mt-2 text-sm font-semibold text-text">{course.mode}</p>
                <p className="text-xs text-muted">Mode</p>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-xl font-semibold text-text">What you'll learn in this course
                </h2>
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="inline-flex items-center gap-2 rounded-full border border-border-soft px-4 py-2 text-xs font-semibold text-text transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {downloading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Preparing...
                    </>
                  ) : (
                    <>
                      <Download size={14} /> Download Syllabus (PDF)
                    </>
                  )}
                </button>
              </div>
              {course.learn?.length > 0 ? (
                <div className="border-t border-white/10">
                  {course.learn.map((item) => (
                    <details key={item.week} className="group border-b border-white/10">
                      <summary className="flex cursor-pointer list-none items-baseline gap-5 py-4 font-semibold text-white [&::-webkit-details-marker]:hidden">
                        <span className="min-w-[4.5rem] font-medium text-white/60">
                          {item.week}
                        </span>
                        <span>{item.title}</span>
                        <span className="ml-auto text-2xl leading-none text-blue-400 group-open:hidden">
                          +
                        </span>
                        <span className="ml-auto hidden text-2xl leading-none text-blue-400 group-open:inline">
                          –
                        </span>
                      </summary>
                      <p className="max-w-2xl pb-5 text-white/60">{item.topics}</p>
                    </details>
                  ))}
                </div>
              ) : (
                <ul className="mt-4 space-y-3">
                  {course.Syllabus.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <aside className="w-full shrink-0 rounded-2xl border border-border-soft bg-surface p-6 lg:w-80">
            <p className="eyebrow">Price</p>
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
                  ₹{course.price.toLocaleString("en-IN")}
                </span>
              </div>
            )}

            <a
              href={formLinks.enrollNow}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              {isComingSoon ? "Join the waitlist" : "Enroll Now"} <ArrowRight size={16} />
            </a>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-border-soft px-5 py-3.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
              {downloading ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Preparing PDF...
                </>
              ) : (
                <>
                  <Download size={15} /> Download Syllabus (PDF)
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-muted">
              Opens a secure Google Form. Your details go directly to our team.
            </p>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-border-soft pt-12">
            <h2 className="font-display text-xl font-semibold text-text">
              More in {course.category}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}