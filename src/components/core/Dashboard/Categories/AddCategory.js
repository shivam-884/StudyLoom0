import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import {
  createCategory
} from "../../../../services/operations/courseDetailsAPI"

import IconBtn from "../../../common/IconBtn"
import { useNavigate } from "react-router-dom"


export default function AddCategoryModal() {

    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
  
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm()
  
    useEffect(() => {
      setValue("categoryName", "")
      setValue("categoryDesc", "")
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const goToCategories = () => {
      navigate("/dashboard/allCategories")
    }
  
  
    const onSubmit = async (data) => {
      await createCategory(
        {
          name: data.categoryName,
          description: data.categoryDesc,
        },
        token
      )
    //   setCategoryModal(false)
    goToCategories()
    setLoading(false)
    }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6"
    >
      {/* Course Title */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="categoryName">
          Category Name <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="categoryName"
          placeholder="Enter Category Name"
          {...register("categoryName", { required: true })}
          className="form-style w-full"
        />
        {errors.categoryName && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Category Name is required
          </span>
        )}
      </div>
      {/* Course Short Description */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="categoryDesc">
          Category Short Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="categoryDesc"
          placeholder="Enter Description"
          {...register("categoryDesc", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full"
        />
        {errors.categoryDesc && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Category Description is required
          </span>
        )}
      </div>

      <div className="mt-6 flex w-11/12 justify-end gap-x-2">
              <button
              disabled={loading}
            onClick={() => {navigate("/dashboard/my-profile")}}
                className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
              >
                Cancel
              </button>
              <IconBtn disabled={loading} text="Save"  />
            </div>

    </form>
  )
}
