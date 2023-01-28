var point = 0;
var mark12 = 0;
var mark100200 = 0;
var ans_arr = ans_arr[1];


//Функція перевірки тестів
    
function checkTest(object, answer) {
    const num = ans_arr[answer]-1;
    if (document.getElementsByName(object)[num].checked == true) {
        document.getElementsByName(object)[ans_arr[answer]-1].setAttribute("class", "green");
        point++;
    } else {
        //document.getElementsByName(object)[ans_arr[answer]-1].checked = true;
        //document.getElementsByName(object)[ans_arr[answer]-1].setAttribute("class", "red");

        //Правильна віповідь зеленим, неправильна - червоним. 
        document.getElementsByName(object)[num].checked != true;
        document.getElementsByName(object)[num].setAttribute("class", "red");

    } 
}

function checkTest2(object, answer) {
    const num = ans_arr[answer]-1;
    if (document.getElementsByName(object)[num].checked == true) {
        document.getElementsByName(object)[ans_arr[answer]-1].setAttribute("class", "green");
        point = point + 2;
    } else {
        //document.getElementsByName(object)[ans_arr[answer]-1].checked = true;
        //document.getElementsByName(object)[ans_arr[answer]-1].setAttribute("class", "red");

        //Правильна віповідь зеленим, неправильна - червоним. 
        document.getElementsByName(object)[num].checked != true;
        document.getElementsByName(object)[num].setAttribute("class", "red");

    } 
}




//Блокуємо форму
function readonlyForm() {
    var inputs, index;
    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
        inputs[index].disabled = true;
    }

}


document.addEventListener('DOMContentLoaded', function() {

    //By default, submit button is dissabled
    //document.querySelector('#submit').disabled = true;

    document.querySelector('form').onsubmit = () => {
        
        var check_radio = 0;
        var inputs = document.getElementsByTagName('input');
        for (i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                check_radio++;
            }
        }

        
        
        if (check_radio < 16) {
            alert('Введіть відповіді до усіх задач!');
        } else {
            localStorage.setItem('value', 0);
            //Перевірка тестів 1-6
            checkTest('z1', 'ans-1');
            checkTest('z2', 'ans-2');
            checkTest('z3', 'ans-3');
            checkTest('z4', 'ans-4');
            checkTest('z5', 'ans-5');
            checkTest('z6', 'ans-6');
            
            //Перевірка відповідностей 7-8
            checkTest('z7-1', 'ans-7-1');
            checkTest('z7-2', 'ans-7-2');
            checkTest('z7-3', 'ans-7-3');
            
            checkTest('z8-1', 'ans-8-1');
            checkTest('z8-2', 'ans-8-2');
            checkTest('z8-3', 'ans-8-3');


            //Перевірка тестів 9-12
            checkTest2('z9', 'ans-9');
            checkTest2('z10', 'ans-10');
            checkTest2('z11', 'ans-11');
            checkTest2('z12', 'ans-12');
            

            point = Math.round(point*0.6)
          
            document.querySelector('#submit').setAttribute("class", "none");

            document.querySelector('#answertext').innerHTML = '<p>Тестовий бал: '+point+'</p>';
            //document.querySelector('#answertext').innerHTML = check_radio;
            
            
            readonlyForm();
            stop();
        }


        // Stop form from submiting

        return false;


    }

});
  
  

