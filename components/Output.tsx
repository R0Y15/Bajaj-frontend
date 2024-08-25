'use client';

import React from 'react'

const Output = ({ response }: { response: any }) => {
    return (
        <section className='flex w-full h-12'>
            <div className='mx-auto shadow-md min-w-[28rem] max-w-md h-12 rounded-xl p-5'>
                {response ? (
                    <div>
                        <h3>Response Data:</h3>
                        <pre>{JSON.stringify(response, null, 2)}</pre>
                    </div>
                ) : (
                    <p>No data yet. Submit the form to see the response here.</p>
                )}
            </div>
        </section>
    )
}

export default Output