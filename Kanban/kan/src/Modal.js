import React, { useState } from 'react'

function Modal({ setShowModal, colTitle, addItem }) {
    const [task, setTask] = useState('');

    return (
        <>
        <div className='taskbox'>
            <div className='taskadd'>
                <h3 className="p1 m1">
                    Add task in {colTitle}
                </h3>
                <p className="mtl2">Task</p>
               <input className="m2 mt0" value={task} onChange={(e) => setTask(e.target.value)}></input> 
               <div className="actionButtons">
                   <button className="cancel m1" onClick={() => setShowModal(false)}>Cancel</button>
                   <button className="save m1" onClick={() => addItem(task)}>Save</button>
               </div>
            </div>
        </div>
        </>
    )
}

export default Modal