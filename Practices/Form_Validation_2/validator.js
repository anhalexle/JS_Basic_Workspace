function Validator (formSelector) {
    var _this = this;
    var formRules = {};

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    /**
     * Quy ước tạo rules
     * - Nếu có lỗi thì return `errorMessage`
     * - Nếu không có lỗi trả về undefined
     */
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email';
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} ký tự`;
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} ký tự`;
            }
        },
    };

    // var ruleName = 'required';
    // console.log(validatorRules[ruleName])

    // console.log(formSelector)
    // Lấy ra form element trong DOM theo 'formSelector'
    var formElement = document.querySelector(formSelector);
    // console.log(formElement)
    //Chỉ xử lý có element trong DOM
    if (formElement) {
        //Lấy theo attribute
        var inputs = formElement.querySelectorAll('[name][rules]');
        // console.log(inputs);
        for (var input of inputs) {
            // console.log(input);

            var rules = input.getAttribute('rules').split('|');
            var ruleInfo;
            for(var rule of rules) {
                // console.log(rule);
                var isRuleHasValue = rule.includes(':');
                
                if (isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    // console.log(ruleInfo);
                    rule = ruleInfo[0]; 
                    // console.log(validatorRules[rule](ruleInfo[1]));
                }
                // console.log(rule);

                // console.log(validatorRules[rule])
                var ruleFunc = validatorRules[rule];
                // console.log(ruleFunc);

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                    // console.log(ruleFunc);
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    // console.log(rule)
                    //lần đầu tiên ko ph là mảng nên cần gán giá trị mảng vào
                    formRules[input.name] = [ruleFunc];
                    // console.log(validatorRules[rule])
                }
            }
           
            // formRules[input.name] = input.getAttribute('rules')
            // console.log(input.getAttribute('rules'));  


            //Lắng nghe sự kiện để validate (blur, change, ...)
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }
        // console.log(formRules)
        //Hàm thực hiện validate
        function handleValidate(event) {
            // console.log(formRules[event.target.name]);
            var rules  = formRules[event.target.name];
            console.log(rules)
            var errorMessage;
            for (var rule of rules) {
                // console.log(event.target.value)
                errorMessage = rule(event.target.value);
                // console.log(errorMessage);
                if (errorMessage) break;
            }
            // rules.some(function(rule) {
            //     errorMessage = rule(event.target.value);
            //     return errorMessage
            // })

            // console.log(errorMessage)
            //Nếu có lỗi thì hiển thị Message lỗi ra UI
            if(errorMessage) {
                // console.log(event.target)
                // var htmls = event.target.parentElement.querySelector('.form-message');
                // htmls.innerText = errorMessage;

                var formGroup =  getParent(event.target, '.form-group');
                // formGroup.innerText = errorMessage;
                // // console.log(formGroup)
                if (formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    formMessage.innerText = errorMessage;
                }
            }
            return !errorMessage;
        }
        
        //Hàm clear Message lỗi
        function handleClearError(event) {
            var formGroup = getParent(event.target, '.form-group');
            if(formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');
                if (formMessage) {
                    formMessage.innerText = '';
                }
            }
        }

        // console.log(formRules); 
    }
    // console.log(formRules);

    //Xử lý hành vi submit form
    formElement.onsubmit = function (event) {
        event.preventDefault();
        // _this.onSubmit();
        // console.log(_this);
        //this keyword 
        
        var inputs = formElement.querySelectorAll('[name][rules]');
        var isFormValid = true;
        // console.log(inputs);
        for (var input of inputs) {
            // console.log(input.name);
            isFormValid = handleValidate({
                target: input
            })
        }
        // console.log(isFormValid);
        //Khi không có lỗi thì submit form
        if (isFormValid) {
            // formElement.submit();
            if (typeof _this.onSubmit === 'function') {
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
                    //Gọi lại hàm onsubmit và trả về kèm giá trị của form
                    _this.onSubmit (formValues);
            } else {
                formElement.submit();
            }
        }
        
    }
}