import React, { useEffect, useRef, useState } from "react"
import { AiOutlineDown } from "react-icons/ai"
import { HiOutlineVideoCamera } from "react-icons/hi"

function CategoryCourseAccordion({ course }) {
  return (
    <div>
      <div className="flex justify-between py-2">
        <div className={`flex items-center gap-2`}>
          <span>
            <HiOutlineVideoCamera />
          </span>
          <p>{course?.courseName}</p>
        </div>
          <p >By: <span className="text-pink-400">{`${course.instructor.firstName} ${course.instructor.lastName}`}</span></p>
      </div>
    </div>
  )
}

export default CategoryCourseAccordion
