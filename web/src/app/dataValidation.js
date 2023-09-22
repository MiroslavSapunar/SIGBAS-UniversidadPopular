const validateForm = formSelector =>{
    const formElement = document.querySelector(formSelector);

     const validationOptions = [
        {
            attribute: 'required',
            isValid: input => input.value.trim() !== '',
            errorMessage: (input, label) => `${label.textContent} es requerido` 
        },
        {
            attribute: 'minlength', 
            isValid: input => input.value && input.value.length >= parseInt(input.minLength, 10),
            errorMessage: (input, label) => `${label.textContent} necesita al menos ${input.minLength} caracteres`, 
        },
            
     ];

     const validateSingleFormGroup = formGroup => {

        const label = formGroup.querySelector('label'); 
        const input = formGroup.querySelector('input, textarea');
        const errorContainer = formGroup.querySelector('.error');

        let formGroupError = false;
        for(const option of validationOptions) {
            if(input.hasAttribute(option.attribute) && !option.isValid(input)){
                errorContainer.textContent = option.errorMessage(input, label);
                input.classList.add('border-red-700');
                input.classList.remove('border-green-700');
                let formGroupError = true;
            }
        }
        if(!formGroupError){
            errorContainer.textContent = '';
            input.classList.add('border-green-700');
            input.classList.remove('border-red-700');
        }
    };
   
   
    formElement.setAtribute('novalidate', '');

    Array.from(formElement.elements).forEach(element => {
        element.addEventListener('blur', event => {
            validateSingleFormGroup(event.srcElement.parentElement.parentElement)
        });
    })

    formElement.addEventListener('submit', event=> {
        event.preventDefault();
        validateAllFormGroups(formElement);
    });

    const validateAllFormGroups = formToValidate => {
        const formGroup = Array.from(formToValidate.querySelectorAll('.formGroup'));
        
        formGroup.forEach(formGroup => {
            validateSingleFormGroup(formGroup);
        });

    }
};

validateForm('#registrationForm');