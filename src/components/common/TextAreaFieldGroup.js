import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
}) => {
  return(
    <div>
      <textarea
        className={classnames('form-control', {'input-invalid': error})}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}/>
        {error && (<div className="invalid-response">{error}</div>)}
        {info && <small className="form-text text-muted">{info}</small>}
    </div>
  );
}

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default TextAreaFieldGroup;