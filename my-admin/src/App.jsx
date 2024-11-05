import { Admin, Resource, ListGuesser, ShowGuesser, EditGuesser  } from 'react-admin';
import {PocketBaseProvider} from './ra-pocketbase';
import { PostList, PostEdit, PostShow } from './posts';

const apiURL="https://silver-orbit-wr79rp4qrr9qh5jpr-8090.app.github.dev/";

export const dataProvider=PocketBaseProvider(apiURL).dataProvider;
export const authProvider=PocketBaseProvider(apiURL).authProvider;

function App () {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      + <Resource 
          name="posts" 
          list={PostList}
          show={PostShow} 
          edit={PostEdit} 
        />
    
    </Admin>
  //create={CreateGuesser}
      
    
  )
}

export default App
