import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subTitle: '',
      backgroundColor: ''
    }
  }

  componentDidMount() {
    const { title, subTitle, backgroundColor } = this.props.content;

    this.setState({
      title,
      subTitle,
      backgroundColor
    })
  }

  onInputChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    })

    // Send data from state to parent
    /* @TOFIX
     * One input delay (don't have the answer atm)
     */
    this.props.callback({
      title: this.state.title,
      subTitle: this.state.subTitle,
      backgroundColor: this.state.backgroundColor
    })
  }

  render() {
    const { definitions } = this.props;
    const titleInput = definitions[0];
    const subtitleInput = definitions[1];
    const bgSelect = definitions[2];

    return(
      <div className="app-editor">
        <Form>
          <FormGroup>
            <Label for={titleInput.id}>{titleInput.label}</Label>
            <Input
              type={titleInput.type}
              id={titleInput.id}
              name={titleInput.label}
              value={this.state.title}
              onChange={this.onInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for={subtitleInput.id}>{subtitleInput.label}</Label>
            <Input
              type={subtitleInput.type}
              id={subtitleInput.id}
              name={subtitleInput.label}
              value={this.state.subTitle}
              onChange={this.onInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for={bgSelect.id}>{bgSelect.label}</Label>
            <Input
              type={bgSelect.type}
              name={bgSelect.label}
              id={bgSelect.id}
              value={this.state.backgroundColor}
              onChange={this.onInputChange}
            >
              {bgSelect.options.map(opt => (
                <option key={opt[0]} value={opt[0]}>{opt[1]}</option>
              ))}
            </Input>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Editor;
