import React, {useState, useEffect} from 'react';

import Nav from './components/Nav';
import ItemsContainer from './components/ItemsContainer';

import axios from 'axios';

const App = () => {
    const [data, setData] = React.useState({});

    useEffect(()=>{
      axios(
        'https://http.cat/[status_code]'
      ).then((res) => {console.log(res)});
    },[]);
    

    return (
      <div>
        <Nav />
        <ItemsContainer />
      </div>
    );
}

export default App;
