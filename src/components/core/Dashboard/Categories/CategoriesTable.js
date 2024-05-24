import { useDispatch, useSelector } from "react-redux"
import {VscCollapseAll} from 'react-icons/vsc'
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"

import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import CategoriesAccordionBar from "./CategoriesAccordionBar"


export default function CategoriesTable({ categories, isActive, setIsActive, handleActive }) {
  

  return (
    <>
                      <div>
                    <button
                      className="text-yellow-25 flex gap-1"
                      onClick={() => setIsActive([])}
                    >
                      Collapse all sections
                      <VscCollapseAll/>
                    </button>
                    
                  </div>
      <Table className="rounded-xl border border-richblack-800 ">
        <Thead>
          <Tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
            <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
              Categories
            </Th>
            <Th className="text-left text-sm font-medium uppercase text-richblack-100">
              No of Courses
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {categories?.length === 0 ? (
            <Tr>
              <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
                No Categories found
                {/* TODO: Need to change this state */}
              </Td>
            </Tr>
          ) : (
                    <Tr>
                      {categories && categories?.map((category, index) => (
                          <CategoriesAccordionBar
                            category={category}
                            key={index}
                            isActive={isActive}
                            handleActive={handleActive}
                          />
                        ))}
                    </Tr>    

                      )}
        </Tbody>
      </Table>
    </>
  )
}
