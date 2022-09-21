function Validator (formSelector) {
    const _this = this;
    const formRules = {};

    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    const validatorRules = {
        required(value) {
            return value ? undefined : 'Vui lòng nhập trường này!'
        },
        email(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập đúng định dạng email';
        },
        min(min) {
            return function (value) {
                return value ? undefined : `Vui lòng nhập ít nhất ${min} ký tự`
            }
        }
    };

    var formElement = document.querySelector(formSelector);
    // console.log(formElement)
    if(formElement) {
        var inputs = document.querySelectorAll('[name][rules]');
        // console.log(inputs)
        for (var input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            // console.log(rules)
            var ruleInfo;
            for (var rule of rules) {
                var isRuleHasValue = rule.includes(':');

                if(isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                    // console.log(rule);
                } 

                var ruleFunc = validatorRules[rule];
                // console.log(ruleFunc);
                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            input.onblur = handleValidate;
            input.oninput = handleClearErrors;
        }
    }

    function handleValidate(e) {
        // console.log(formRules[event.target.name]);//rule trong input
        var rules = formRules[e.target.name];//lấy ra đc tên rule trong input
        var errorMessage;
        for (var rule of rules) {
            errorMessage = rule(e.target.value);//lấy value trong input
            if(errorMessage) break;
        }
        if(errorMessage) {
            var formGroup = getParent(e.target, '.form-group');
            // console.log(formGroup)
            if(formGroup) {
                formGroup.classList.add('invalid');
                formGroup.querySelector('.form-message').innerHTML = errorMessage;
            }
        }

        return !errorMessage;
    }
    // console.log(formRules);

    function handleClearErrors(e) {
        // console.log(formElement.querySelector(e.target.className))
        // console.log(typeof e.target.className)
        var formGroup = getParent(e.target, '.form-group');
        // var formGroup = formElement.querySelector(`.${e.target.className}`).closest('.form-group');
        // console.log(formGroup)
        if(formGroup.classList.contains('invalid')) {
            formGroup.classList.remove('invalid');
            formGroup.querySelector('.form-message').innerHTML = '';
        }
    }

    formElement.onsubmit = function(e) {
        e.preventDefault();
        var inputs = formElement.querySelectorAll('[name][rules]');
        var isFormValid = true;
        for (var input of inputs) {
            isFormValid = handleValidate({
                target: input,
            })
        }
        // console.log(isFormValid);
        if(isFormValid) {
            // console.log(typeof _this.onSubmit)
            if(typeof _this.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                // console.log(enableInputs)
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
                    _this.onSubmit (formValues);
            } else {
                _this.onSubmit();
            }
        }
    }
}