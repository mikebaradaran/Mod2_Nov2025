import Card from "./Card";
import "./card.css"

function BlogList(props) {

    const theList = props.data.map( blog => {
        return (
            <Card key={blog.id}>
                <div>Title:  {blog.title} </div>
                <div>Author: {blog.author}</div>
                <div>Body:   {blog.body}  </div>
                <button onClick={()=>props.deleteBlog(blog.id)} >❌</button>
            </Card>
        )
    });

    return theList;
}
export default BlogList;
