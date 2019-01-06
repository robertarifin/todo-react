import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './AddTask.css';
import { TextField, InputBase } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import VerticalIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

class AddToDoExperiment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }
  showFull = () => {
    const paper = document.getElementById("paper");
    paper.classList.add('expanded');
  }

  showMin = () => {
    const paper = document.getElementById("paper");
    paper.classList.remove('expanded');
    this.passDataToParent();
  }

  getTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  getContent = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  passDataToParent = (e) => {
    let newTask = {
      title: this.state.title,
      content: this.state.content
    };

    this.setState({
      title: '',
      content: ''
    })

    if (newTask.title != '') {
      this.props.addTask(e, newTask);
    }
  }

  render() {
    return (
    <div className="btn-container">
      <Paper className="add-paper" id="paper" elevation={8} onFocus={this.showFull}>
      <div>
        <InputBase className="input" placeholder="Title" value={this.state.title} onChange={this.getTitle} />
      </div>
      <div>
      <InputBase multiline={true} className="input" value={this.state.content} onChange={this.getContent} placeholder="Take a note..." />
      </div>
        <Button className="paper-three-dots" color="primary" onClick={this.showMin}>
          Close
        </Button>
      </Paper> 
    </div>
    )
  }
}

export default AddToDoExperiment