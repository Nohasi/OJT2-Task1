import React from "react";
import CountWords from "../services/CountWords";

const EnterWords = (onChangeForm, text) => {

    return(
        <div className="row">
            <div className="col-md-7 mrgnbtm">
                <h2>Enter Sentence Here</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail">Sentence </label>
                            <input type="text" className="form-control" name="text" id="text" aria-describedby="emailHelp" placeholder="Text" />
                        </div>
                    </div>
                    <button type="submit">Count</button>
                </form>
            </div>
        </div>
    );
};

export default EnterWords;