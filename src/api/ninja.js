/* eslint-disable */

const apiRequest = async () => {
try{
    const requestAPI = await fetch('http://numbersapi.com/random/trivia',{
    method: 'GET',
    contentType: 'application/json',
});

const response = await requestAPI.text();
return response;

}

catch(error){
    console.error(error);   
}


}


export default apiRequest;
  
