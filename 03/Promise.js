const doSomething = function(duration){
    return new Promise((resolve,reject) => {
        setTimeout(resolve('OK'),duration)
    })
}

//1000 ms
let tick = doSomething(1000)
    .then(response => console.log('Tock') )
    .catch(err => console.error(error) )

const setTimeoutPromise = (duration) =>
    new Promise(
        (resolve, reject) => setTimeout(resolve, duration)
    )

setTimeoutPromise(1000).then(() => console.log("tick"));

// npm install node-fetch --save
const fetch = require('node-fetch');

const fetchPosts = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const allPosts = await response.json();
        let posts = allPosts.filter(allPosts => allPosts.userId == 1);
        console.log(posts);
    }
    catch(error){
        console.error(error)
    }
  }
  
  fetchPosts();