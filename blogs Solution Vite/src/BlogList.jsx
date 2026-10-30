import Card from "./Card";

function BlogList(props) {

    const theList = props.data.map( blog => {
        return (
            <Card key={blog.id}>
                <h3>Title:{blog.title}</h3>
                <div>Author: {blog.author}</div>
                <div>Body: {blog.body}</div>
                <button onClick={()=>props.deleteBlog(blog.id)} >Delete</button>
            </Card>
        )
    });
    return theList;
}

export default BlogList;
