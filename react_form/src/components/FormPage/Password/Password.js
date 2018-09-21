import React from 'react';
import { Field } from 'react-form';

const validate = value => ({
    error: !value ? "Input is required'" : null
});

export const Password = props => {
    console.log('props', props);
    return (

        // Use the form field and your custom input together to create your very own input!
        <Field validate={validate} field={props.field}>
            { fieldApi => {

                const { onChange, ...rest } = props;

                const { value, error, setValue } = fieldApi;

                return (
                    <div>
                        <input
                            type="password"
                            {...rest}
                            value={value || ''}
                            onChange={e => {
                                setValue(e.target.value);
                                (onChange) && onChange(e.target.value, e)
                            }}
                        />
                    </div>
                )
            }}
        </Field>
    );
};

export default Password;