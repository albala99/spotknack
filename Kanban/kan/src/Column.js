import React, { useState } from 'react'
import './App.css';
import Modal from './Modal';
function Item({data,color}){
    return(
        <div className="item" style={{borderTop:`4px solid ${color}`}}>
          {data}
        </div>
    )
}
function Column({colTitle,tasks,bordercolor}){
    const [showModal, setShowModal] = useState(false);

    const openAddNewTaskModal = () => {
        setShowModal(true);
    };

    const addItem = (task, column) => {
        console.log(task);
        tasks.push(task);
        setShowModal(false);
    };

    return(
         <div className='column'>
            <header className="columnHeading"> 
            <h3>{colTitle}</h3>
            </header>
            <div className='items'>
                {
                    tasks.map((i,index)=>(
                    <Item 
                    key={index}
                    data={i}
                    color={bordercolor}
                    />
                    ))
                }
            </div>
            <div>
                {showModal &&
                (<Modal
                showModal={showModal}
                setShowModal={setShowModal}
                colTitle={colTitle}
                addItem={addItem}
            ></Modal>)}

            </div>
            <button className="addnew" onClick={openAddNewTaskModal}>
            Add task
            </button>
        </div>

    )
}
export default Column