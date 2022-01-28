import React, {useState} from "react";
import Board, {moveCard} from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import './index.css';

const initialboard= {
  columns:[
  {
    id:1,
    title:"Todo",
    cards:[
      {
        id:1,
        title:"Host",
        description:"host all webites"
      },
      {
        id:2,
        title:"Git",
        description:"push to git"
      },
    ]
  },
  {
    id:2,
    title:"Done",
    cards:[
      {
        id:1,
        title:"Learning",
        description:"Basics of web"
      }
    ]
  }
]
};

function MyBoard(){
  const [board,setBoard] =useState(initialboard);

  function onCardMove(card,source,destination) {
    const updatedBoard=moveCard(board,source,destination);
    setBoard(updatedBoard);
  }
  return(
    <Board
    onCardDragEnd={onCardMove} 
    disableColumnDrag
    >{board}</Board>
    
  )
}


export default MyBoard