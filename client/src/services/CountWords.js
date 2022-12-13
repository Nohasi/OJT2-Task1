export async function countWords(data){
    try {
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