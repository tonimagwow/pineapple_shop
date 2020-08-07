import React from 'react'
import Title from './Title'

export default function Empty() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <Title name="empty sopping cart" />
                    {/* add a button to go back */}
                </div>
            </div>
        </div>
    )
}