$("#submit").click(function () {
    var inputs = $('input');
    var isValid = true;

    inputs.each(function () {
        if (!this.checkValidity()) {
            isValid = false;
            return false; // Break the loop if any input is invalid
        }
    });

    if (!isValid) {
        // Create and append a new span for invalid data
        $('.invalid-data-message').text('Please Enter Valid Data');
    } else {
        // If data is valid, remove any existing "Invalid Data" span
        // Process the form submission
        submitData().then(function(success) {
            if (success) {
                $('.invalid-data-message').css('color', 'green');
                $('.invalid-data-message').text('Student Added Successfully');
                $('.addStudentForm input').val('');
            } else {
                $('.invalid-data-message').text('ERROR! Data Not Added To Server');
            }
        });
    }
});

let submitData = function () {
    let dob = new Date($("#dob").val());
    let currentDate = new Date();
    let age = currentDate.getFullYear() - dob.getFullYear();
    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    let formData = {
        "id": 0,
        "name": $("#name").val(),
        "email": $("#email").val(),
        "rollNumber": $("#rollNumber").val(),
        "department": $("#department").val(),
        "degree": $("#degree").val(),
        "dob": $("#dob").val(),
        "end": $("#end").val(),
        "start": $("#start").val(),
        "city": $("#city").val(),
        "interest": $("#interest").val(),
        "subject": $("#subject").val(),
        "age": age,
        "gender": $("#gender").val()
    };

    return new Promise(function(resolve, reject) {
        $.ajax({
            url: 'https://localhost:7121/api/Student/',
            type: 'POST',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function () {
                resolve(true);
            },
            error: function (xhr, status, error) {
                resolve(false);
            }
        });
    });
};