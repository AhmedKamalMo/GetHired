import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <>
            <div>navbar</div>
            <Outlet />
        </>
    )
}

export default HomeLayout