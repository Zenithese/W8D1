import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  render () {

    // if (!currentUser) {
    //   redirect_to "/"
    // }

    return (<div>
      <header>{this.props.formType}</header>
      <ul>
        {this.props.errors.map( (error, i) => {
          <li key={`${i}`}>
            error={error}
          </li>
        })}
      </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleChange("username")}/>
          <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
          <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
          <button type='submit' value={this.props.formType}></button>
        </form>
    </div>)

  }
}

export default withRouter(SessionForm);