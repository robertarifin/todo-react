import React, { Component } from 'react';
import './App.css';
import AddToDo from './AddTask';
import ToDoList from './ToDoList';
import AddToDoExperiment from './AddToDoExperiment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      toDos: [],
      open: false,
      updateDialog: false,
      fullWidth: true,
      maxWidth: 'sm',
      wantToUpdateTitle: '',
      wantToUpdateContent: ''
    });
  }

  didMount() {

  }

  openDialog = () => {
    this.setState({
      open: true
    });
  }

  closeDialog = () => {
    this.setState({
      open: false
    })
  }

  openUpdateDialog = (title, content) => {
    this.setState({
      updateDialog: true,
      wantToUpdateTitle: title,
      wantToUpdateContent: content
    })
  }

  closeUpdateDialog = () => {
    this.setState({
      updateDialog: false
    })
  }

  addTask = (e, task) => {
    console.log(task, 'ccccc')
    this.closeDialog();
    let allTasks = this.state.toDos.map((element) => element);
    allTasks.push(task);
    this.state.toDos = allTasks;
  }

  deleteToDo = (title, content) => {
    this.closeUpdateDialog();
    let allTasks = [];

    allTasks = this.state.toDos.filter((element) => {
      if (element.title != title && element.content != content) {
        return true
      } else {
        return false
      }
    });

    this.state.toDos = allTasks;
  }

  render() {
    return (
      <div className="main">
        <AddToDoExperiment
          addTask={this.addTask}
        />
        {/* <AddToDo
          addTask={this.addTask}
          open={this.state.open}
          openDialog={this.openDialog}
          closeDialog={this.closeDialog}
          fullWidth={this.state.fullWidth}
          maxWidth={this.state.maxWidth}
        /> */}
        <ToDoList  
          toDos={this.state.toDos}
          fullWidth={this.state.fullWidth}
          maxWidth={this.state.maxWidth}
          open={this.state.updateDialog}
          openDialog={this.openUpdateDialog}  
          closeDialog={this.closeUpdateDialog}
          wantToUpdateTitle={this.state.wantToUpdateTitle}
          wantToUpdateContent={this.state.wantToUpdateContent}
          deleteToDo={this.deleteToDo}
        />
      </div>
    );
  }
}

export default App;
