console.log("👀")
// This Will Show Up Regardless of Your 



// 📜 SET UP 🧰


////  JUST #TeamDefer




//////// PUPPET STRINGZ

const DATABASE = []
const randomTingzZone = document.querySelector("#rrrrandom-tingz")

////////////////


const fetchARandomTing=()=>{ // woobly :)

    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then( (quote)=>{console.log(quote)
    
        DATABASE.push(quote)
            console.log(DATABASE)

            const randomT = document.createElement("h4")
                  randomT.textContent = quote.anime
                  randomTingzZone.append(randomT)

    })

}
const init =()=>{ 
      console.log("WE SUPER LIT....BETTER YET, WE, ARE,,, LIVE 🙆🏾‍♂️")  // 

    
    //   const DATABASE = []


      const changeTheH1 = document.querySelector("h1")
                console.log(changeTheH1)  //
            changeTheH1.textContent = "WE, ARE,,, LIVE 🙆🏾‍♂️"

      const changeLoadingImage = document.querySelector("img")
                console.log(changeLoadingImage)  //
            changeLoadingImage.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0906b988-7e73-42cc-9161-23f7d070a0e0/de3thvp-7aa68096-f7e9-4822-9acf-72643bfab10e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA5MDZiOTg4LTdlNzMtNDJjYy05MTYxLTIzZjdkMDcwYTBlMFwvZGUzdGh2cC03YWE2ODA5Ni1mN2U5LTQ4MjItOWFjZi03MjY0M2JmYWIxMGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Oi6dCZy1wrFjiwng8PKjViL9o7bQcs9-kbR22q-ZKfY"
      
      for(i = 0; i < 20; i++){

        fetchARandomTing()    

      }      

}
document.addEventListener("DOMContentLoaded", (event) =>{ init() })

////////////////////////////////  JUST #TeamDefer








//// JUST #DOMContentLoaded


// initialize  === set it up 
// const app =()=>{ 


//     console.log("WE SUPER LIT....BETTER YET, WE, ARE,,, LIVE 🙆🏾‍♂️")  // 

//     const changeTheH1 = document.querySelector("h1")
//       changeTheH1.textContent = "WE, ARE,,, LIVE 🙆🏾‍♂️"


// }
// document.addEventListener("DOMContentLoaded", (event) =>{ app() })


////////////////////////////////  JUST #DOMContentLoaded
