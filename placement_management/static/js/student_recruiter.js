$(function () {
    $('form').on('submit', function () {
        event.preventDefault();
        var value = $("input[name=user]:checked").val();
        switch (value) {
            case "student": location.href = "studentform"; break;
            case "recruiter": location.href = "companyform"; break;

        }
    });
});