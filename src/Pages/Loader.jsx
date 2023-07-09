import React from 'react';
import { Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';

const Loader = () => {
    return <section
        className={`max_width px-4 grid md:grid-cols-2 lg:grid-cols-3 h-screen place-items-center pt-10 gap-4`}>
        {/* img section  */}
        <div className="h-[25rem] md:h-[35rem]">
            <Skeleton sx={{
                background: '#6b6b6b',
            }} variant="rectangular" width={'25rem'} height={'30rem'} />
        </div>

        {/* summary section  */}
        <div className="lg:col-span-2 space-y-5 max-w-[50rem]">
            <Link
                to="/"
                className="text-para_text transition duration-200 ease-in hover:text-white hover:tracking-wider"
            >
                Home /
            </Link>
            <div className="flex items-center gap-4">
                <Skeleton sx={{
                    background: '#6b6b6b',
                }} variant="text" width={60} height={30} />
                <Skeleton sx={{
                    background: '#6b6b6b',
                }} variant="text" width={60} height={30} />
                <Skeleton sx={{
                    background: '#6b6b6b',
                }} variant="text" width={60} height={30} />
                <button
                    className="bg-blue px-4 py-1 text-xl font-semibold rounded-2xl hover:bg-blue/80 active:scale-90"
                >
                    Book Now
                </button>
            </div>
            <div className="px-2">
                <h1 className="font-bold text-xl mb-1">STORY:</h1>
                <p className="text-para_text">
                    <Skeleton sx={{
                        background: '#6b6b6b',
                    }} variant="text" width={'45rem'} height={'100px'} />
                </p>
            </div>
            <div className="text-para_text px-2 pb-10">
                <h1 className="text-white font-bold text-xl mb-1">DETAILS:</h1>
                <p style={{ display: 'flex' }}>Status:
                    <Skeleton sx={{
                        background: '#6b6b6b',
                    }} variant="text" width={40} height={40} />
                </p>
                <p style={{ display: 'flex' }}>First air date: <Skeleton sx={{
                    background: '#6b6b6b',
                }} variant="text" width={40} height={40} /></p>
                <p style={{ display: 'flex' }}>Spoken language:
                    <Skeleton sx={{
                        background: '#6b6b6b',
                    }} variant="text" width={40} height={40} />
                </p>
                <p style={{ display: 'flex' }}>Runtime: <Skeleton sx={{
                    background: '#6b6b6b',
                }} variant="text" width={40} height={40} /> minute</p>
            </div>
        </div>
    </section>
}

export default Loader