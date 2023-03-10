
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.






const boxesFb = 100;
const fizBuzCon = document.getElementById('fizbuzcont');

for (i = 1; i <= boxesFb; i++) {
    
    

    if (i % 3 === 0  && i % 5 === 0) {

        fizBuzCon.innerHTML += `
        <div class="box debug">
            <div class="innerbox d-flex justify-content-center align-items-center">
            FizzBuzz
            </div>
        </div>`;

        } else if (i % 3 === 0) {

            fizBuzCon.innerHTML += `
        <div class="box debug">
            <div class="innerbox d-flex justify-content-center align-items-center">
            Fizz
            </div>
        </div>`;

        } else if (i % 5 === 0) {

            fizBuzCon.innerHTML += `
        <div class="box debug">
            <div class="innerbox d-flex justify-content-center align-items-center">
            Buzz
            </div>
        </div>`;
        } else {

            fizBuzCon.innerHTML += `
            <div class="box debug">
                <div class="innerbox d-flex justify-content-center align-items-center">
                ${i}
                </div>
            </div>`;
        }





    }




































