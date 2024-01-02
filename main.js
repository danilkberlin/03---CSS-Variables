const inputs = document.querySelectorAll('.controls input')
function handlUpdate() {
    console.log(this.value)
}
inputs.forEach( input => input.addEventListener('change', handlUpdate,)
)