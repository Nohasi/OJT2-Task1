async function CountWords(data){
    try {
        console.log(data);
        const response = await fetch('', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: data
        });
        return await response.json;
    }
    catch(error){
        return "Error";
    }
}

export default CountWords;