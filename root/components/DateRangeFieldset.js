import React from 'react';

import FormRowPartialDate from './FormRowPartialDate';
import FormRowCheckbox from './FormRowCheckbox';


const DateRangeFieldset = ({field, endedLabel, disabled}) => {
  return (
    <>
      <fieldset>
        <legend>{l('Date Period')}</legend>
        <p>
          {l('Dates are in the format YYYY-MM-DD. Partial dates such as YYYY-MM or just YYYY are OK, or you can omit the date entirely.')}
        </p>
        <FormRowPartialDate disabled={disabled} field={field.field.begin_date} label={l('Begin date:')} />
        <FormRowPartialDate disabled={disabled} field={field.field.end_date} label={l('End date:')} />
        <FormRowCheckbox
          disabled={disabled}
          field={field.field.ended}
          label={endedLabel}
        />
      </fieldset>
    </>
  );
};

export default DateRangeFieldset;
