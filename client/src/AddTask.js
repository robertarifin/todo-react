import React, { Component } from 'react';
import './AddTask.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { TextField } from '@material-ui/core';

class AddToDo extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      title: '',
      content: ''
      }
  };

  getTitle = e => {
    this.setState({
      title: e.target.value
    });
  }

  getContent = e => {
    this.setState({
      content: e.target.value
    });
  }

  passDataToParent = e => {
    let newTask = {
      title: this.state.title,
      content: this.state.content
    };

    this.setState({
      title: '',
      content: ''
    })

    this.props.addTask(e, newTask);
  }

  closeDialog = () => {
    this.setState({
      title: '',
      content: ''
    })

    this.props.closeDialog();
  }

  render() {
    return (
      <div className="add-task">
        <Button variant="contained" color="primary" onClick={this.props.openDialog}>Add</Button>
        <Dialog
          open={this.props.open}
          fullWidth={this.props.fullWidth}
          maxWidth={this.props.maxWidth}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle>Add New To Do</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            value={this.state.title}
            required
            onChange={this.getTitle}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Take a note..."
            type="text"
            value={this.state.content}
            onChange={this.getContent}
            multiline={true}
            fullWidth
          /> 
        </DialogContent>
        <DialogActions>
          <Button onClick={this.closeDialog} color="secondary">
            Close
          </Button>
          <Button onClick={this.passDataToParent} color="primary">
            Add
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default AddToDo