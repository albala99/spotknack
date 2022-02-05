import './App.css';
import Column from './Column';

const initialData=[
  {
    title:"To-Do",
    tasks:["Task-1","Task-2","Task-3","Task-4"],
    color:"red"
  },
  {
    title:"In-Progress",
    tasks:["Task-5","Task-6","Task-7"],
    color:"yellow"
  },
  {
    title:"Done",
    tasks:["Task-8","Task-9","Task-10","Task-11"],
    color:"green"
  },
]
const showcolumn=()=>{
  return(
    <section className="columns">
    <Column
    colTitle={initialData[0].title}
    tasks={initialData[0].tasks}
    bordercolor={initialData[0].color}
    />
    <Column
    colTitle={initialData[1].title}
    tasks={initialData[1].tasks}
    bordercolor={initialData[1].color}
    />
    <Column
    colTitle={initialData[2].title}
    tasks={initialData[2].tasks}
    bordercolor={initialData[2].color}
    />
    </section>
  )
}

function App() {
  return (
    <div className="app">
      <header className="header">
         <h1>Kanban Board</h1>
      </header>
        {showcolumn()}
    </div>
  );
}

export default App;
