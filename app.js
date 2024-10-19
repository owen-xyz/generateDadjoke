const listJoke=document.querySelector('.list-joke');
const btn=document.querySelector('button')
const addJoke=async()=>{
    const joke=await getJoke();
    const newLi=document.createElement('li');
    listJoke.innerHTML=''
    newLi.append(joke);
    
    listJoke.append(newLi);
}



const getJoke=async()=>{
    const config ={
        headers:{
            Accept:'application/json',
        },
    };
    const res =await axios.get('https://icanhazdadjoke.com/',config);
    return(res.data.joke);
}

btn.addEventListener('click',addJoke);

