debugger;
if (document.form1) {
    let result = browser.storage.local.get(["p_user", "p_sisma", "p_mis_student"]);
    result.then(function (result) {
        if (result.p_user && result.p_sisma && result.p_mis_student) {
            document.form1.p_user.value = result.p_user;
            document.form1.p_sisma.value = result.p_sisma;
            document.form1.p_mis_student.value = result.p_mis_student;
            document.form1.submit();
        }
    });
}