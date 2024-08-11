$(document).ready(function () {
    let url = 'https://localhost:7121/api/Student/';
    $("#light-mode").click(function () {
        $(".bg-grey").toggleClass("bg-wheat");
        $(".bg-wheat").toggleClass("bg-grey");
        $(".bg-light-grey").toggleClass("bg-light");
        $(".bg-light").toggleClass("bg-light-grey");
        $(".bg-black").toggleClass("bg-white");
        $(".bg-white").toggleClass("bg-black");

    });
    $(".hamburger").click(function () {
        $(".left").css("left", "auto");
        $(".left").css("position", "relative");
        $(".right").css("transition", "all 0.5s")
        $(".right").css("opacity", "20%")

    });
    $(".cross").click(function () {
        $(".left").css("left", "-120%");
        $(".left").css("position", "absolute");
        $(".right").css("transition", "all 0.5s")
        $(".right").css("opacity", "100%")
    })
    $.get(url, function (data) {
        $("#studentsBody").empty();
        $.each(data, function (index, student) {
            var row = $("<tr>").appendTo("#studentsBody");
            //$("<td>").text(student.id).appendTo(row);
            $("<td>").text(student.rollNumber).appendTo(row);
            $("<td>").text(student.name).appendTo(row);
            $("<td>").text(student.email).appendTo(row);
            $("<td>").text(student.department).appendTo(row);
            $("<td>").text(student.degree).appendTo(row);
            //$("<td>").text(student.dob).appendTo(row);
            //$("<td>").text(student.end).appendTo(row);
            //$("<td>").text(student.start).appendTo(row);
            $("<td>").text(student.city).appendTo(row);
            $("<td>").text(student.interest).appendTo(row);
            //$("<td>").text(student.subject).appendTo(row);
            $("<td>").text(student.age).appendTo(row);
            $("<td>").text(student.gender).appendTo(row);

            var updateButton = $("<button>").text("Update").addClass("update-btn").click(function () {
                console.log("Update button clicked for student with ID: " + student.id);
            });
            var deleteButton = $("<button>").text("Delete").addClass("delete-btn").click(function () {
                $.ajax({
                    url: url + student.id,
                    type: 'DELETE',
                    success: function () {
                        console.log("Student with ID " + student.id + " deleted successfully");
                        row.remove();
                    },
                    error: function (xhr, status, error) {
                        console.error("Error deleting student with ID " + student.id + ": " + error);
                    }
                });
            });
            $("<td>").append(updateButton, deleteButton).appendTo(row);
            if (index % 2 !== 0) {
                row.addClass("bg-light-grey");
            }
        });
    });

});