import { useEffect, useRef, useState } from "react"
import { AiOutlineDown } from "react-icons/ai"

import CategoryCourseAccordion from "./CategoryCourseAccordion"

export default function CategoriesAccordionBar({ category, isActive, handleActive }) {
  const contentEl = useRef(null)

  // Accordian state
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(isActive?.includes(category._id))
  }, [isActive])
  const [courseHeight, setCourseHeight] = useState(0)
  useEffect(() => {
    setCourseHeight(active ? contentEl.current.scrollHeight : 0)
  }, [active])

  return (
    <div className="overflow-hidden border border-solid border-richblack-600 bg-richblack-700 text-richblack-5 last:mb-0">
      <div>
        <div
          className={`flex cursor-pointer items-start justify-between bg-opacity-20 px-7  py-6 transition-[0.3s]`}
          onClick={() => {
            handleActive(category._id)
          }}
        >
          <div className="flex items-center gap-2">
            <i
              className={
                isActive.includes(category._id) ? "rotate-180" : "rotate-0"
              }
            >
              <AiOutlineDown />
            </i>
            <p>{category?.name}</p>
          </div>
          <div className="space-x-4">
            <span className="text-yellow-25">
              {`${category.courses.length || 0} course(s)`}
            </span>
          </div>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`relative h-0 overflow-hidden bg-richblack-900 transition-[height] duration-[0.35s] ease-[ease]`}
        style={{
          height: courseHeight,
        }}
      >
        <div className="text-textHead flex flex-col gap-2 px-7 py-6 font-semibold">
            <p className="text-sm font-extralight text-richblack-100">{`${category.description}`}</p>
          {category?.courses?.map((course, i) => {
            return <CategoryCourseAccordion course={course} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}
