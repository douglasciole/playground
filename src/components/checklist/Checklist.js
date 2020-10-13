import React, { Component } from 'react';
import ChecklistTasks from './ChecklistTasks';
import BackButton from '../BackButton';

export default class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentText: "",
            taskList: []
        }
    }

    saveState = () => {
        localStorage.setItem("todoList", JSON.stringify(this.state.taskList));
    }

    loadState = () => {
        if ("todoList" in localStorage) {
            const mySavedList = JSON.parse(localStorage.getItem("todoList"));
            this.setState({
                taskList: mySavedList
            });
        }
    }

    addTask = (e) => {
        e.preventDefault();

        if (this.state.currentText.trim() !== "") {
            const newTask = {
                key: Date.now(),
                done: false,
                title: this.state.currentText
            }
            this.setState({
                taskList: [...this.state.taskList, newTask],
                currentText: "" 
            });

        }else {
            this.setState({
                currentText: "" 
            });
        }

    }

    removeTask = (taskKey) => {
        if (window.confirm("Remove item from the list?")) {
            const newList = this.state.taskList.filter(task => taskKey != task.key);
            this.setState({
                taskList: newList
            });
        }
    }

    toggleTask = (e, taskKey) => {
        let newList = this.state.taskList;

        for (let i = 0; i < newList.length; i++) {
            if (newList[i].key === taskKey) {
                newList[i].done = e.target.checked;
                break;
            }
        }

        this.setState({
            taskList: newList
        });
    }

    updateTask = (e, taskKey) => {
        let newList = this.state.taskList;

        for (let i = 0; i < newList.length; i++) {
            if (newList[i].key === taskKey) {
                newList[i].title = e.target.value;
                break;
            }
        }

        this.setState({
            taskList: newList
        });
    }

    handleInput = (e) => {
        this.setState({currentText: e.target.value});
    }

    componentDidUpdate(prevProps, prevState) {
        this.saveState();
    }

    componentWillMount() {
        this.loadState();
    }

    render() {
        return (
            <>
                <BackButton />

                <div className="App">
                    <header>
                        <form onSubmit={this.addTask}>
                            <input onChange={this.handleInput} value={this.state.currentText} type="text" placeholder="Task Title" />
                            <button onClick={this.addTask}>Add</button>
                        </form>
                    </header>
                    
                    <ChecklistTasks updateTask={this.updateTask} removeTask={this.removeTask} toggleTask={this.toggleTask} list={this.state.taskList} />
                </div>
            </>
        )
    }
}
