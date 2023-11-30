import { Link } from "react-router-dom";

export default function RouteError() {
    return (
        <div id="error-page-container">
            <h1>We could not find what you are looking for.</h1>
            <h3>Go back to the <Link to="/">homepage</Link></h3>
        </div>
    )
}