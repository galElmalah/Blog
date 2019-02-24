import React from 'react';
import { someEmpty, errorMessages } from './utils';
import { withRouter } from 'react-router-dom';

class FromManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        ...props.formInitialData,
      },
      onChange: this.onChange,
      setEmptyFields: this.setEmptyFields,
      onSubmit: this.onSubmit,
      checkForErrors: this.checkForErrors,
      onKeyPressHandler: this.onKeyPressHandler,
      errors: {},
    };
  }

  onChange = ({ target: { name, value } }) => {
    this.removeFromErrors(name, 'EMPTY');

    this.setState(prevState => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  setEmptyFields = () => {
    Object.entries(this.state.formData).forEach(([key, value]) => {
      if (!value) {
        this.setState(prevState => ({
          errors: {
            ...prevState.errors,
            [key]: { msg: errorMessages(key), type: 'EMPTY' },
          },
        }));
      }
    });
  };

  shouldRemoveError(errorObject, type) {
    return errorObject && errorObject.msg && errorObject.type === type;
  }

  removeFromErrors(fieldName, errorType) {
    const { errors } = this.state;
    if (this.shouldRemoveError(errors[fieldName], errorType)) {
      this.setState(prevState => ({
        errors: { ...prevState.errors, [fieldName]: {} },
      }));
    }
  }

  navigateBackToBlog = ({ success }) => {
    success && this.props.history.push(`/blog`);
  };

  onSubmit = () => {
    const { onSubmitAction } = this.props;
    const { formData } = this.state;

    if (someEmpty(Object.values(formData))) {
      this.setEmptyFields();
      return;
    }

    onSubmitAction(formData).then(this.navigateBackToBlog);
  };

  checkForErrors = fieldName => {
    return !!(this.state.errors[fieldName] && this.state.errors[fieldName].msg);
  };

  onKeyPressHandler = ({ key }) => key === 'Enter' && this.onSubmit();

  render() {
    return this.props.children(this.state);
  }
}

export default withRouter(FromManager);
