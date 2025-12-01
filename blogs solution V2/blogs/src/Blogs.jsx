import BlogList from './BlogList';
import blogData from './data.json';
import { useEffect, useState } from 'react';

function Blogs() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/data')
            .then(res => {
                return res.json();
            }).then(blogsData => {
                setData(blogsData);
            });
    }, []);

    function deleteBlog(id) {
        setData(data.filter(item => item.id !== id));
    }

    return (
        <div>
            {data && <BlogList data={data} deleteBlog={deleteBlog} />}
        </div>
    );
}

export default Blogs;
