
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.






const boxesFb = 100;
const fizBuzCon = document.getElementById('fizbuzcont');

for (i = 1; i <= boxesFb; i++) {
    
    

    if (i % 3 === 0  && i % 5 === 0) {

        fizBuzCon.innerHTML += `
        <div class="box pu-bg m-1">
            <div class="innerbox d-flex justify-content-center align-items-center fw-bold fs-5">
            FizzBuzz
            </div>
        </div>`;

        } else if (i % 3 === 0) {

            fizBuzCon.innerHTML += `
        <div class="box or-bg m-1">
            <div class="innerbox d-flex justify-content-center align-items-center fw-bold fs-5">
            Fizz
            </div>
        </div>`;

        } else if (i % 5 === 0) {

            fizBuzCon.innerHTML += `
        <div class="box ye-bg m-1">
            <div class="innerbox d-flex justify-content-center align-items-center fw-bold fs-5">
            Buzz
            </div>
        </div>`;
        } else {

            fizBuzCon.innerHTML += `
            <div class="box gr-bg m-1">
                <div class="innerbox d-flex justify-content-center align-items-center fw-bold fs-3">
                ${i}
                </div>
            </div>`;
        }





    }




































