import React from 'react'
export interface props {
  value: string | number,

}

function CustomInput(props: props) {

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div className='flex justify-center mt-10 h-36'> 

<input type='text' className='flex flex-col h-12 w-4/6 p-6 border-solid rounded-md border-2 border-indigo-600 
' placeholder='type something ' value={props.value} onChange={handleChange}/>

    </div>
    )
}

export default CustomInput