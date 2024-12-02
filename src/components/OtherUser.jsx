import React from 'react'

const OtherUser = () => {

    return (
        <div>
            <div className='flex gap-3 items-center cursor-pointer py-2'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full  '>
                        <img src="https://preview.redd.it/3fc3wd5xwf171.png?auto=webp&s=efea2e1ae32067ea07fc547585f64a95171c7902" alt="" />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='font-bold flex justify-between gap-2'>
                        <p>Gaurv</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-1 h-1'></div>
        </div>
    )
}

export default OtherUser