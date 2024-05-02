import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const Alphabet = observer(() => {
    const {good} = useContext(Context)
    return (
        <div>

        </div>
    );
});

export default Alphabet;