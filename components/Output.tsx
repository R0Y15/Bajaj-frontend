'use client';

import React from 'react'

const Output = ({ response }: { response: any }) => {
    return (
        <section className='flex w-full'>
            <div className='mx-auto shadow-md min-w-[28rem] max-w-md h-12 rounded-xl p-5'>
                {response ? (
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                ) : (
                    <p>No response yet.</p>
                )}
            </div>
        </section>
    )
}

export default Output