export const formValidator = (element, valid) => {
    if(element){
        if(valid === false){
            element.style.visibility = "visible"
        }else  element.style.visibility = "hidden"   
    }
}