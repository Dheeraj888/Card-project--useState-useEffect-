import React from 'react'
import { FcLike,FcLikePlaceholder  } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course
  let likedCourses = props.likedCourses;
  let setLikedCourses= props.setLikedCourses;
  
  function clickHandler(){
    if(likedCourses.includes(course.id)){

      setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id)))
      toast.warning("liked removed")
    }else{

      if(likedCourses.length ===0){
        setLikedCourses([course.id])
      }else{
        setLikedCourses((prev)=>[...prev,course.id])
      }
      toast.success("Liked Successfully")

    }

  }
  return (
    <div className=' w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className=' relative'>
        <img  src={course.image.url} alt="" />
      <div className=' absolute w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center
       right-2 top-[120px] '>
        <button onClick={clickHandler}>
        {
          likedCourses.includes(course.id)? (<FcLike fontSize="1.70rem"/>):(<FcLikePlaceholder fontSize="1.70rem"/>)
        }
        </button>
      </div>
<div className=' p-4'>
  <p className=' text-white font-semibold text-lg leading-6 '>{course.title}</p>
  <p className=' m-2 text-white cursor-pointer'>{
          course.description.length >100 ? 
          (course.description.substr(0,100)) + "..."
          : (course.description)
  }</p>
</div>
        </div>

    </div>
  )
}

export default Card