let form = document.getElementById("form");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    let student = {
        name: form.username.value,
        email: form.email.value,
        password: form.password.value,
        age: form.age.value,
        gender: form.gender.value,
        course: form.course.value,
        address: form.address.value
    };
    fetch("http://localhost:5500", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
})
.then(response => response.text())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});

    console.log(student);
    alert("form is submitted")
});
document.body.style.backgroundColor="red"


