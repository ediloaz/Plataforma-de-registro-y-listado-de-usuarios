import dayjs from 'dayjs';

export const useCustomRegister = (register, errors, control, setValue, watch, readOnly) => {
    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    const registerText = (fieldName) => {
        const error = getNestedValue(errors, fieldName);
        const values = {
            name: fieldName,
            control: control,
            error: !!error,
            helperText: error?.message ?? ' ',
        };
        if (readOnly) {
            values.disabled = true;
        }
        return values;
    }

    const registerSelect = (fieldName) => {
        const error = getNestedValue(errors, fieldName);
        const values = {
            name: fieldName,
            defaultValue: '',
            control: control,
            error: !!error,
            helperText: error?.message,
        };
        if (readOnly) {
            values.disabled = true;
        }
        return values;
    }

    const registerToggle = (fieldName, defaultValue) => {
        if (watch(fieldName) == undefined) setValue(fieldName, defaultValue)
        const values = {
            name: fieldName,
            defaultValue: '',
            control: control,
            value: watch(fieldName) || defaultValue,
            onChange: (event, newValue) => {
                setValue(fieldName, newValue)
            },
        };
        if (readOnly) {
            values.disabled = true;
        }
        return values;
    }

    const registerCheck = (fieldName) => {
        const values = {
            name: fieldName,
            defaultValue: '',
            control: control,
        };
        if (readOnly) {
            values.disabled = true;
        }
        return values;
    }

    const registerRangeDate = (fieldNames) => {
        const values = {
            onChange: (dates) => {
                const firstDate = dates && dates[0] && dayjs(dates[0])
                const secondDate = dates && dates[1] && dayjs(dates[1])
                setValue(fieldNames?.[0], firstDate)
                setValue(fieldNames?.[1], secondDate)
            },
            defaultValue: [null, null],
            control: control,
        }
        if (readOnly) {
            values.disabled = true;
        }
        return values;
    }

    const registerSingleDate = (fieldName) => {
        const values = {
            onChange: (date) => {
                const selectedDate = date && dayjs(date)
                setValue(fieldName, selectedDate)
            },
            defaultValue: null,
            control: control,
        }
        if (readOnly) {
            values.disabled = true;
        }
        return values;
    }


    const registerNormalTextField = (fieldName) => {
        const error = getNestedValue(errors, fieldName);
        const hasInitialValue = Boolean(watch(fieldName));
        if (readOnly) {
            return {
                ...register(fieldName, {disabled: true}),
                error: !!error,
                helperText: error?.message,
                InputLabelProps: { shrink: hasInitialValue },
            };
        } else {
            return {
                ...register(fieldName),
                error: !!error,
                helperText: error?.message,
                InputLabelProps: { shrink: hasInitialValue },
            };
        }

    }

    const customRegister = (fieldName, elementType = '', defaultValue = '') => {
        switch (elementType) {
            case 'text':
                return registerText(fieldName);
            case 'select':
                return registerSelect(fieldName);
            case 'toggle':
                return registerToggle(fieldName, defaultValue);
            case 'check':
                return registerCheck(fieldName);
            case 'rangeDate':
                return registerRangeDate(fieldName);
            case 'singleDate':
                return registerSingleDate(fieldName);
            default:
                return registerNormalTextField(fieldName);
        }
    };


    return customRegister;
}


