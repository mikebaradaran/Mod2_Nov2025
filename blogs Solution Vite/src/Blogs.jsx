import { useEffect, useState } from 'react';
import './App.css'
import BlogList from './BlogList';
// import blogData from './data.json';

function Blogs() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState("wait...");
    useEffect(() => {
        fetch('http://localhost:4000/data')
            .then(res => {
                return res.json();
            }).then(data => {
                setData(data);
                setIsLoading(null);
            })
    }, []);



    function deleteBlog(id) {
        setData(data.filter(item => item.id != id));
    }

    return (
        <>
            {isLoading && <h3>{isLoading}</h3>}
            {data && <BlogList data={data} deleteBlog={deleteBlog} />}
        </>
    )
}


export default Blogs
