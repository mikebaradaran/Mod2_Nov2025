import { Link } from "react-router-dom";
import Card from "./Card";

function NotFound() {
  return (
    <Card>
      <div>Sorry page not found</div>
      <Link to="/">back to home...</Link>
    </Card>
  );
}

export default NotFound;
