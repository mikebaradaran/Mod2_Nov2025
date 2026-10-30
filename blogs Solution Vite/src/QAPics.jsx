
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { AppContext } from "./AppContext";

function QAPics(props) {
    const { theme } = useContext(AppContext);
    const { id } = useParams();

    var pic;

    if (Number(id) === 1) {
        pic = 'https://picsum.photos/1000/300?random=1';
    }
    else if (Number(id) === 2)
        pic = 'https://picsum.photos/700/300?random=2'

    return (<div>
        <h3> This is picture number: {id} theme used is {theme}</h3>
        {pic && <img src={pic} />}
    </div>);
};

export default QAPics;
