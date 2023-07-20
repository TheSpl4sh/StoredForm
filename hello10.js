const btn = document.querySelector('.btnContent')
const btnSave = document.querySelector('.save')
const btnCancel = document.querySelector('.cancel')
const textArea = document.querySelector('.main__content')


btn.addEventListener('click', changeEditable)

function changeEditable() {
    textArea.setAttribute('contenteditable', true)
    btn.setAttribute('disabled', true)
    btnSave.removeAttribute('disabled', true)
    btnCancel.removeAttribute('disabled', true)
}

btnSave.addEventListener('click', saveData)

function saveData() {
    localStorage.removeItem('string')
    localStorage.setItem('string', textArea.textContent)
}

btnCancel.addEventListener('click', cancelData)

function cancelData() {
    textArea.textContent = localStorage.getItem('string')
}




