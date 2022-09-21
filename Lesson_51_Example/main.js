

//READ
var courseApi = 'http://localhost:3000/courses';

function start() {
    // getCourses(function(courses) {
    //     // console.log(course);
    //     renderCourses(courses)
    // });
    //hàm render tự động
    getCourses(renderCourses);
    handleCreateForm();
}


//start cái ứng dụng của web
start();

//Functions

function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function(response) {
            response.json();

        })
        .then(callback);

}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            response.json();

        })
        .then(function() {
            //gọi lại API nhiều lần
            // getCourses(renderCourses);
            //đỡ phải gọi
            var courseItem = document.querySelector('.course-item-' + id);
            if(courseItem) {
                courseItem.remove();
            }
        });
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var html = courses.map(function(course) {
        return `<li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
        </li>`;
    });
    listCoursesBlock.innerHTML = html.join('');
}


function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        // alert();
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        // console.log(name)
        var formData = {
            name: name,
            description: description
        };
        createCourse(formData, function() {
            //tự refresh lại thành phần mới
            getCourses(renderCourses);
        });
    }
}
