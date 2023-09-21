function welcome(firstName, lastName){
    var fullName = `${firstName} + " " + ${lastName}`
    function displayFullName(fullName){
        alert("Welcome " + `${fullName}`)
    }
    displayFullName(this.fullName)
}