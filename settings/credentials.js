function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        p_user: document.form1.p_user.value,
        p_sisma: document.form1.p_sisma.value,
        p_mis_student: document.form1.p_mis_student.value
    });
}

function restoreOptions() {

    function setCurrentChoice(result) {
        document.form1.p_user.value = result.p_user || "";
        document.form1.p_sisma.value = result.p_sisma || "";
        document.form1.p_mis_student.value = result.p_mis_student || "";
    }

    var getting = browser.storage.local.get(["p_user", "p_sisma", "p_mis_student"]);
    getting.then(setCurrentChoice);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);