import {type Params, useParams } from "react-router-dom";

type TProfileParams = Params<string>;

export default function Profile(){

    const {userName} = useParams<TProfileParams>();

    return (
    <>

        <h1>Profile page</h1>;
        {userName && <p>Welcome, {userName}!</p>}

    </>
    );
}