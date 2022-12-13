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
        <div style={{backgroundColor: 'green'}} className="display-board">
            <h4 style={{color: 'white'}}>Number of words:</h4>
            <div className="number">
                testing display board
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => countWords()} className="btn btn-warning">Count Words</button>
            </div>
        </div>
    )
};