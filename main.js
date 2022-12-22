//  const name = document.getElementById('name')
//  const email = document.getElementById('email')

//  const subject = document.getElementById('subject')
//  const message = document.getElementById('message')
//  const form = document.getElementById('form')



//  form.addEventListener('submit',(e) =>{
//     let message = []
//     if (name.value ===''|| name.value == null) {
//         message.push('Name is required')
//     }


//  } )


for (let i = 1; i <= 100; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

 
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 