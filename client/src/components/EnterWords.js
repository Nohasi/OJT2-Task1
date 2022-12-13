import React from "react";

const EnterWords = (onChangeForm, countWords) => {

    return(
        <div className="row">
            <div className="col-md-7 mrgnbtm">
                <h2>Enter Sentence Here</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail">Sentence</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="sentence" id="firstname" aria-describedby="emailHelp" placeholder="Sentence" />
                        </div>
                    </div>
                    <button type="button" onClick={(e) => countWords()} className="btn btn-danger">Count</button>
                </form>
            </div>
        </div>
    );
};

export default EnterWords;