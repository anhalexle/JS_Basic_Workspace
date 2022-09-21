
//Đối tượng `Validator` 
function Validator (options) {
    // console.log(options.form)

    function getParent (element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement; 
        }    
    }

    var selectorRules = {

    }

    //Hàm thực hiện validate
    function validate (inputElement,rule) {
        var errorElement = getParent (inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        // var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        // console.log(inputElement.value);
        //value: inputElement.value
        //test func: rule.test
        var errorMessage;

        //Lấy ra các rule của selector
        var rules = selectorRules[rule.selector];

        //Lặp qua từng rule và kiểm tra
        // Nếu có lỗi dừng việc kiểm tra
        for(let i = 0; i < rules.length; ++i) {
            switch(inputElement.type) {
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default: {
                    errorMessage = rules[i](inputElement.value);
                }
            }
            if (errorMessage) break;
            
        }

        // console.log(rules);
        // console.log(errorMessage);
        if(errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        //chuyển errorMessage thành boolean
        return !errorMessage;
        // console.log(errorElement);
    }

    //Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    
    // console.log(options.rules)

    if (formElement) {
        //Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            //Lặp qua từng rule và validate
            options.rules.forEach (function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if(!isValid) {
                    isFormValid = false;
                }
            });
            
            

            // console.log(formValues)

            if (isFormValid) {
                //Trường hợp submit với js
                if (typeof options.onsubmit == 'function') {
                    var enableInputs = formElement.querySelectorAll(' [name]:not([disabled])');

                    // console.log(enableInputs);

                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        switch(input.type) {
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = [];
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                } 
                                values[input.name].push(input.value)
                                break;
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value                         
                        }
                        return values;
                    }, {});
                    options.onsubmit (formValues);
                }
                //Trường hợp submit với form mặc định 
                else {
                    formElement.submit();


                }
            } 
        }

        //Xử lý lặp qua mỗi rule và xử lý (lắng nghe sự kiện)
        // console.log(formElement);
        options.rules.forEach (function (rule) {

            //Lưu lại các rule cho mỗi input

            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test]; 
            }
            // selectorRules[rule.selector] = rule.test; 

            // console.log(rule.selector);
            var inputElements = formElement.querySelectorAll(rule.selector);
            
            //Convert NodeList to Array
            Array.from(inputElements).forEach (function (inputElement) {
                // console.log(inputElement)
                if (inputElement) {
                    //Xử lý trường hợp blur khỏi input
                    inputElement.onblur = function () {
                    validate(inputElement, rule);
                    }

                    //Xử lý mỗi khi người dùng nhập vào input
                    inputElement.oninput = function () {
                        // console.log(inputElement.value);
                        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message');
                        errorElement.innerText = '';
                        getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                    }

                }   
            });

                 
        });
        // console.log(selectorRules)
    }
}


//Định nghĩa các rules
//Nguyên tắc của các rules:
//1. Khi có lỗi => trả ra message lỗi
//2. Khi hợp lệ => không trả ra gì cả (undefined)
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            //loại bỏ tất cả dấu cách
            return value ? undefined : message || 'Vui lòng nhập trường này';
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var reject = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return reject.test(value) ? undefined : message || 'Trường này phải là email'
        }
    };
}

Validator.minLength = function (selector,min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmedValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmedValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}