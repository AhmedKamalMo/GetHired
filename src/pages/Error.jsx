import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Warpper from '../assets/wrappers/ErrorPage';

const Error = () => {
    const err = useRouteError();
    console.log(err);
    if (err.status === 404) {
        return (
            <Warpper>
                <div>
                    <img src={img} alt="not found" />
                    <h3> page not found</h3>
                    <p>we can't seem to find the page you are looking for </p>
                    <Link to='/dashboard'>back home</Link>
                </div>
            </Warpper>
        )
    }

    return (
        <>
            <Wrapper>
                <div>
                    <h3>something went wrong</h3>
                </div>
            </Wrapper>
        </>
    )
}

export default Error