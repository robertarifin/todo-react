import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { TextField } from '@material-ui/core';
import './ToDo.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.wantToUpdateTitle,
      content: this.props.wantToUpdateContent
    };

    console.log(this.state, 'aaaa')
  }

  openUpdateDialog = (title, content) => {
    this.setState({
      title: title,
      content: content
    })

    this.props.openDialog()
  }

  render() {
    const toDos = this.props.toDos.map((element, index) => {
      return (
        <Grid item xs={3} key={index} onClick={() => this.openUpdateDialog(element.title, element.content)}>
          <Paper elevation={4} className="paper-props">
            <Typography className="word" variant="title" color="inherit">{element.title}</Typography>
            <Typography className="todo-content" variant="p" color="inherit">{element.content}</Typography>
          </Paper>
        </Grid>
      )
    });
    
    return (
      <div className="container">
        <Grid container spacing={24}>
          {toDos}
        </Grid>
        <Dialog
        open={this.props.open}
          fullWidth={this.props.fullWidth}
          maxWidth={this.props.maxWidth}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle>Update ToDo...</DialogTitle>
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
          <Button 
            onClick={() => this.props.deleteToDo(this.state.title, this.state.content)} 
            color="secondary"
          >
            Delete
          </Button>
          <Button 
            style={{color: '#2196f3'}} 
            onClick={this.props.closeDialog}
          >
            Close
          </Button>
          <Button onClick={this.props.closeDialog} color="primary">
            Update
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default ToDoList