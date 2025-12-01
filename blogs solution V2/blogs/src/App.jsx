import { Route, Routes } from 'react-router-dom';
import Blogs from './Blogs';
import MainNavigation from './MainNavigation';
import NewBlog from './NewBlog';
import QAPics from './QAPics';
import NotFound from './NotFound';

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/new" element={<NewBlog />} />
        <Route path="/qa/pics/:id" element={<QAPics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>



  );
}
export default App;