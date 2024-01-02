const inputs = document.querySelectorAll('.controls input')
function handlUpdate() {
    const suffix = this.dataset.sizing || '';
    console.log(suffix)
}
inputs.forEach( input => input.addEventListener('change', handlUpdate,))
inputs.forEach( input => input.addEventListener('mousemove', handlUpdate))