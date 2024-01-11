import React from 'react'

function Cards({user}) {
    console.log(Object.entries(user))
    // [['id', '1'],[],[],[]]
  return (
    <div>
        <div className='h-64 w-64 border-black bg-slate-300 rounded-md'>
           {
            Object.entries(user).map((value)=>{
                if(typeof value[1] !== 'object'){
                    return (
                        <div key={value[0]} style={{display: 'flex', gap: '20px'}}>
                            <p>{value[0]}: </p>
                            <p>{value[1]}</p>
                        </div>
                    )
                }
            })
           }
        </div>
      
    </div>
  )
}

export default Cards
