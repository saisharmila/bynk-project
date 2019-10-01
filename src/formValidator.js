export const formValidator = (element, valid) => {
    if(element){
        if(valid === false){
            element.style.border = "1px solid red"
        }else  element.style.border = "1px solid green"   
    }
}