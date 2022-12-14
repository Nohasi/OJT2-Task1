import React from "react";

export const DisplayBoard = ({countWords}) => {
    const headerStyle = {
        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }

    return( 
        <div style={{backgroundColor: '#7A7265', paddingTop: '5px', paddingBottom: '15px'}} className="display-board">
            <h2 style={{color: 'white', fontStyle:'italic'}}>Number of words:</h2>
            <div className="number">
                <h3>
                    {countWords}
                </h3>
            </div>
        </div>
    )
};