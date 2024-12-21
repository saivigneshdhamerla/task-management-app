import React, { useState } from 'react'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

const submitHandler = (e)=>{
  e.preventDefault()

  setNewTask({taskTitle,taskDate,taskDescription,category,active:false,newTask:true,failed:false,completed:false})
  const data= JSON.parse(localStorage.getItem('employees'))
  data.forEach(function(elem){
    if(assignTo == elem.firstName){
      elem.tasks.push(newTask);
      
    }
  })
    localStorage.setItem('employees',JSON.stringify(data))

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')

}

  return (
    <div className='p-5 bg-[#353439c3] mt-5 rounded'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }} className=' p-5 flex flex-wrap w-full rounded items-start justify-between'>
                
                <div className='w-1/2 '>

                <div >
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                type="text " className=' outline-none px-3 py-1 rounded bg-transparent mt-2 border-[1px] border-gray-400 mb-4 text-sm w-4/5' placeholder='Make a UI design' name="" id="" />
                </div>

                <div >
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input 
                 value={taskDate}
                 onChange={(e)=>{
                   setTaskDate(e.target.value)
                 }}
                type="date" name="" id="" className=' outline-none px-3 py-1 rounded  mt-2 border-[1px] border-gray-400 mb-4 text-sm bg-transparent w-4/5'/>
                </div>

                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input 
                 value={assignTo}
                 onChange={(e)=>{
                   setAssignTo(e.target.value)
                 }}
                type="text" placeholder='Enter employee name' name="" id="" className=' outline-none px-3 py-1 rounded bg-transparent mt-2 border-[1px] border-gray-400 mb-4 text-sm w-4/5'/>
                </div>
                
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                 value={category}
                 onChange={(e)=>{
                   setCategory(e.target.value)
                 }}
                type="text" placeholder='Design, dev, etc' name="" id="" className='mt-2 border-[1px] border-gray-400 outline-none px-3 py-1 rounded bg-transparent  mb-4 text-sm w-4/5'/>
                </div>

                </div>

                <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea
                 value={taskDescription}
                 onChange={(e)=>{
                   setTaskDescription(e.target.value)
                 }}
                className=' mt-2 w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent
                border-[1px] border-gray-400' cols={30} rows={10}></textarea>
                <button className='bg-emerald-600 py-3 hover:bg-emerald-800 font-semibold rounded text-lg mt-4 w-full'>Create Task</button>
                </div>

                
            </form>
        </div>
  )
}

export default CreateTask