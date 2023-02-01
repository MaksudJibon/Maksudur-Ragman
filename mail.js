function sendEmail() {
   const Http = new XMLHttpRequest();
   const url='https://gmail.com/send';
   Http.open("POST", url);
   Http.send(JSON.stringify({
     to: 'maksudurrahmanjibon@gmail.com',
     subject: 'Email Subject',
     text: 'Email message'
   }));
   Http.onreadystatechange=(e)=>{
     console.log(Http.responseText)
   }
 }
