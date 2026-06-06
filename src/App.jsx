import './app.css'
import AddTask from './components/AddTask';
import Header from './components/Header';
function App (){

  // const [taskLi]

  return <>
    <div className="container">
        {// Header containing Application display Name.
        }
        <Header />  

        {
          // simple Input tag for adding new task with priority using useState.
        <AddTask />
        }

        {
          // Container for displaying task list.
        //<DisplayTasks /> 
        }

        {
          // 
        }
        
    </div>
  </>
}

export default App ;