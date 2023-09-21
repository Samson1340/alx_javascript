function welcome(firstName, lastName){
    function displayFullName(fullName){
        const fullName = `${firstName} ${lastName}`;
        alert(`Welcome ${fullName}!`);
    }
    
    alert(displayFullName());
}