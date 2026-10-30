
import { Link } from "react-router-dom";

function MainNavigation() {

    return (
       
        <nav>
            <ul>
                <li> <Link to='/'>All blogs</Link></li>
                <li> <Link to='/new-blog'>New blog</Link></li>
                <li> <Link to='/new'>Create new Blog</Link></li>
                <li> <Link to='/QA/Pics/1'>pic 1</Link></li>
                <li> <Link to='/QA/Pics/2'>pic 2</Link></li>
            </ul>

        </nav>
    );
}

export default MainNavigation;

