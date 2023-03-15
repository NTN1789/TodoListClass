import React, { Component } from "react";
import { Button, Container, Form, Task } from "../../styles/todo.styled";

export default class App extends Component {
	state = {
		tarefa: "",
		listaTarefa: [ ]
	};

	handlerTarefa = (event) => {
		this.setState({
			tarefa: event.target.value,
		});
	};

	addTarefa = () => {
		if (this.state.tarefa) {
			this.setState({
				listaTarefa: [
					...this.state.listaTarefa,
					{ name: this.state.tarefa,
				 id: Math.random(), 
				 item:Math.random()	},
				],
				tarefa: "",
			});
		}
	};

	deleteTask = (idTask) => {
		this.setState({
			listaTarefa: this.state.listaTarefa.filter(({ item }) => item !== idTask),
		});
	};

	checkedTask = () => {

	}

	render() {
		return (
			<Container>
				<h1>Todo list</h1>

				<Form>
					<input
						type="text"
						onChange={this.handlerTarefa}
						value={this.state.tarefa}
						placeholder="Adicione uma tarefa"
					/>
					<Button onClick={this.addTarefa} type="button">
						Adicionar Tarefa
					</Button>
				</Form>

				<ul>
					{this.state.listaTarefa[0] ? (
						this.state.listaTarefa.map((tarefa) => {
							return (
								<Task key={tarefa.item}>
									<span>{tarefa.name}</span>
									<button onClick={() => this.checkedTask() }>
									<i class="bx bx-check "></i>
									</button>
									<button onClick={() => this.deleteTask(tarefa.item)}>
										<i class='bx bx-trash'></i>
									</button>

									

								</Task>
							);
						})
					) : (
										
					)}
				</ul>
			</Container>
		);
	}
}