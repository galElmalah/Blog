import React from 'react';
import { someEmpty, errorMessages } from './utils';
import { withRouter } from 'react-router-dom';

class FromManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.formInitialData,
      onChange: this.onChange,
      setEmptyFields: this.setEmptyFields,
      onSubmit: this.onSubmit,
      checkForErrors: this.checkForErrors,
      onKeyPressHandler: this.onKeyPressHandler,
      errors: {},
    };
  }

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  setEmptyFields = () => {
    Object.entries(this.state).forEach(([key, value]) => {
      if (!value) {
        this.setState(prevState => ({
          errors: { ...prevState.errors, [key]: errorMessages(key) },
        }));
      }
    });
  };

  navigateBackToBlog = ({ success }) => {
    success && this.props.history.push(`/blog`);
  };

  onSubmit = () => {
    const { onSubmitAction } = this.props;
    if (someEmpty(Object.values(this.state))) {
      this.setEmptyFields();
      return;
    }
    onSubmitAction(this.state).then(this.navigateBackToBlog);
  };

  checkForErrors = fieldName => {
    return this.state.errors[fieldName];
  };

  onKeyPressHandler = ({ key }) => key === 'Enter' && this.onSubmit();

  render() {
    return this.props.children(this.state);
  }
}

export default withRouter(FromManager);
