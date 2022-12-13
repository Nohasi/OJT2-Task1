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
        <div style={{backgroundColor: 'teal'}} className="display-board">
            <h4 style={{color: 'white'}}>Number of words:</h4>
            <div className="number">
                {countWords}
            </div>
        </div>
    )
};