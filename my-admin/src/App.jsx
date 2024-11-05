import { Admin, Resource, ListGuesser, ShowGuesser, EditGuesser  } from 'react-admin';
import {PocketBaseProvider} from './ra-pocketbase';

const apiURL="https://silver-orbit-wr79rp4qrr9qh5jpr-8090.app.github.dev/";

export const dataProvider=PocketBaseProvider(apiURL).dataProvider;
export const authProvider=PocketBaseProvider(apiURL).authProvider;

function App () {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
    </Admin>
  + <Resource name="posts" list={ListGuesser} show={ShowGuesser} edit={EditGuesser} 
      //create={CreateGuesser}
    />
  );
}

export default App
