import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({
  id,
  name,
  value,
  error,
  info,
  onChange,
  options,
  multiple
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  return(
    <div>
      <select
        className={classnames('form-control', {'input-invalid': error})}
        id={id}
        multiple={multiple}
        name={name}
        value={value}
        onChange={onChange}>
        {selectOptions}
      </select>
        {info && <small className="form-text text-muted">{info}</small>}
      {error && (<div className="invalid-response">{error}</div>)}
    </div>
  );
}

SelectListGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  multiple: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}

export default SelectListGroup;
