import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchAllCategories } from "../../../../services/operations/courseDetailsAPI"
import IconBtn from "../../../common/IconBtn"
import CategoriesTable from "./CategoriesTable"


export default function GetAllCategories() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalNoOfCourses, setTotalNoOfCourses] = useState(0)

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await fetchAllCategories(token)
      if (result) {
        setCategories(result)
      }
      let courses = 0;
      result?.forEach((category) => {
        courses += category.courses.length || 0
      })
      setTotalNoOfCourses(courses)
  
    }
  
    fetchCategories()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [isActive, setIsActive] = useState(Array(0))
  const handleActive = (id) => {
    // console.log("called", id)
    setIsActive(
      !isActive.includes(id)
        ? isActive.concat([id])
        : isActive.filter((e) => e !== id)
    )
  }



  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">All Categories</h1>
        <p className="text-xl font-medium text-richblack-5">{`Total Course: ${totalNoOfCourses}`}</p>
        <IconBtn
          text="Add Category"
          onclick={() => navigate("/dashboard/create-category")}
        >
          <VscAdd />
        </IconBtn>
      </div>


      {categories && <CategoriesTable categories={categories} isActive={isActive} setIsActive={setIsActive} handleActive={handleActive}/>}
    </div>
  )
}
