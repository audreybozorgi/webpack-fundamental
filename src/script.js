import join from 'lodash/join'

function component() {
    const element = document.getElementById('div')

    element.innerHTML = join(['Hello', 'webpack'], ' ')


    return element 
}

document.body.appendChild(component())


