//- JSON server: API Server (Fake API) / Mock API

var courseApi = 'http://localhost:3000/courses';





fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        // console.log(courses);
        var htmls = courses.map(course => {
            return `<li>${course.name}</li>`
        }).join('')

        document.getElementById('course-block').innerHTML = htmls
    })