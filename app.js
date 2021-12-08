var responseDiv = document.body.querySelector(".response");
var list=[];

document.body.querySelector(".butt").addEventListener("click", function () {
    var textValue = document.body.querySelector(".input").value;
    var textValuePass = document.body.querySelector(".inputPass").value;
    if (textValue === "cool" && textValuePass === "password") {
        createNav();
        createWrapper();
        navigate("Grade View");
        document.getElementById("input").style.display = "none"
    } else if (textValue !== "cool" && textValuePass !== "password") {
        responseDiv.innerHTML = "Incorrect Username and Password";
    } else if (textValue !== "cool") {
        responseDiv.innerHTML = "Incorrect Username";
    } else if (textValuePass !== "password") {
        responseDiv.innerHTML = "Incorrect Password";
    }
})

var pages = ["Grade View", "Add Grade"];

var list = [{Name: "", Grade: ""}]
var grades = document.createElement("h4")

function renderList() {
    grades.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        var ele = document.createElement("div");
        ele.innerHTML = list[i].Name + " " + list[i].Grade;
        grades.appendChild(ele);
    }
}

function createNav() {
    var nav = document.createElement("nav")
    createButton(pages[0]);
    createButton(pages[1]);
    document.body.appendChild(nav);


    function createButton(pg) {
        var button = document.createElement("button")
        button.innerHTML = pg
        button.addEventListener("click", function () {
            navigate(pg);
        })
        nav.appendChild(button);
    }
}

function createWrapper() {
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper)
}

function navigate(pg) {
    if (pg === "Grade View") {
        gradeViewPage()
    } else if (pg === "Add Grade") {
        addGradePage()
    }
}

function gradeViewPage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Grades";
    wrapper.appendChild(header);
    wrapper.appendChild(grades)
    renderList()
}

function addGradePage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Add Grade";
    wrapper.appendChild(header);
    var viewStatus = document.createElement("h3");
    wrapper.appendChild(viewStatus)


    var textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.setAttribute("placeholder", "Text");

    var numberInput = document.createElement("input");
    numberInput.setAttribute("type", "text");
    numberInput.setAttribute("placeholder", "Number");

    wrapper.appendChild(textInput)
    wrapper.appendChild(numberInput)

    var submitButton = document.createElement("button")
    submitButton.innerHTML = "Submit"
    submitButton.addEventListener("click", function () {
        if (textInput.value.length > 1) {
            if (isNaN(Number(numberInput.value)) === false) {
                list.push({Name: "Student Name: " + textInput.value, Grade: "| Grade: " + numberInput.value})
                renderList()
                navigate("Grade View")
            } else if (isNaN(Number(numberInput.value)) === true) {
                viewStatus.innerHTML = "Put more than one number in the second input box."
            }
        } else if (textInput.value.length <= 1) {
            viewStatus.innerHTML = "Put more than one character."

        }
    })
    wrapper.appendChild(submitButton)

}

