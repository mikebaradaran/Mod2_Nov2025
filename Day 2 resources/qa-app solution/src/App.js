import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';
import Blogs from './Blogs';
import MainNavigation from './MainNavigation';
import NewBlog from './NewBlog';
import NotFound from './NotFound';
import { AppContext } from './context';
import QAPics from './QAPics';
import MyForm from './MyForm';
import MyForm2 from './MyForm2';

function App() {
  const [ age, setAge ] = useState('http://localhost:4001/blogs/');
  return (
    <div>
      <AppContext.Provider value={{age}}>
        <MainNavigation />
        <Routes>
          <Route path='/' element={<Blogs />} />
          {/* <Route path="/new-blog" element={<NewBlog />} /> */}
          {/* <Route path="/new-blog" element={<MyForm />} /> */}
          <Route path="/new-blog" element={<MyForm2 />} />
          <Route path="/new" element={<NewBlog />} />
          <Route path="/qa/pics/:id" element={<QAPics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
