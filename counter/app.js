//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")) {
            count -= 1;
        }else if(styles.contains("reset")) {
            count = 0;
        }else {
            count += 1;
        }
        if(count<0){}
        //value.style.color = 'black';
        value.style.color = count<0 ? 'red' : 'green'
        value.textContent = count;
    });
});
