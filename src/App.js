import {Switch,Route} from 'react-router-dom'
import Todo from './components/modal-components/Todo';
import { Layout } from './components/posts-components/layout/Layout';
import MainNavigation from './components/posts-components/layout/MainNavigation';
import AddNewPosts from './pages/AddNewPosts';
import AllPosts from './pages/AllPosts';
import FavoritePosts from './pages/FavoritePosts';


function App() {
  return (
    <div >
     <Layout>
      
      <Switch>
        <Route path="/" exact>
          <AllPosts/>
        </Route>
        <Route path="/favoriteposts">
          <FavoritePosts/>
        </Route>
        <Route path="/addnewposts">
          <AddNewPosts/>
        </Route>
      </Switch>
      </Layout>

   
      <Todo text={"Learn React course"}/>
     
    </div>
  );
}

export default App;
