import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


const Error = () => {
    const err = useRouteError();
    console.log(err);

    
    return (
        <>
            <div>Error</div>
            <Link to='/'>Back  home</Link>
        </>
    )
}

export default Error