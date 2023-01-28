function myFirstApp(name) {
    alert(`Привет, меня зовут ${name} и это моя первая программа`);
}
myFirstApp('Misha');

    function showSkills() {
        let skills = ['html', 'css', 'js'];

        for (let i = 0; i < skills.length; i++) {
            console.log('Я владею: ' + skills[i]);
        }
    }
    showSkills();
    
    function checkAge() {
    let age = 14;
    if (age > 18) {
        console.log('У тебя отличные шансы стать фронтенд разработчиком');
    } else {
        console.log('Ты слишком мал');
    }
}
    checkAge();


    function calcPow(num) {
        return num * num;
    }
    console.log(calcPow(4)) 