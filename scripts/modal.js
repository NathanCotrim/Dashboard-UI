const toggleModalVisibility = () => {
    const modal = document.querySelector('#modal-wrapper')

    modal.classList.toggle('active')
}

const toggleModalButtonIcon = () => {
    const buttonIcon = document.querySelector('.modal-button i.active')
    const buttonIconNotActive = document.querySelector('.modal-button i:not(.active)')

    buttonIcon.classList.remove('active')
    buttonIconNotActive.classList.add('active')
}

const setModalButtonAnimation = () => {
    const modalButton = document.querySelector('.modal-button')
    const buttonIcon = document.querySelector('.modal-button i.active')

    if (buttonIcon.classList.contains('fa-plus')) {
        console.log('oi');
        modalButton.classList.add('rotate-reverse')

        setTimeout(() => {
            modalButton.classList.remove('rotate-reverse')
        }, 600)

    } else {
        console.log('oi1');
        modalButton.classList.add('rotate')

        setTimeout(() => {
            modalButton.classList.remove('rotate')
        }, 600)
    }
}

function toggleModal() {

    toggleModalVisibility()
   
    toggleModalButtonIcon()

    setModalButtonAnimation()
    
}