import { Link } from "react-router-dom";

function MainNavigation() {
    return (
        <nav>
            <ul>
                <li> <Link to='/'>All blogs</Link>            </li>
                <li> <Link to='/new-blog'>New blog</Link>     </li>
                <li> <Link to='/new'>Create new Blog</Link>   </li>
            </ul>
        </nav>
    );
}
export default MainNavigation;
