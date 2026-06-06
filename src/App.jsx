import './app.css'
import Header from './components/Header';
function App (){

  return <>
    <div className="container">
        {// Header containing Application display Name.
        }
        <Header />  

        {
          // simple Input tag for adding new task with priority using useState.
        // <AppTask />
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