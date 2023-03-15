import styled from "styled-components";

export const Container = styled.main`
	background-color: aqua;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	h1 {
		display: flex;
		flex-direction: column;
		font-size: 1.8rem;
	}
	ul {
		width: 40%;
		padding: 0 12px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		
	}
`;

export const Form = styled.form`
	width: 40vh;
	padding: 0 12px;
	display: flex;
	flex-direction: column;
	margin: 24px 0;
	gap:14px;

	input {
		border-radius: 5px;
		padding: 15px;
		font-size: 1rem;
	
	}
`;

export const Button = styled.button`
	border-radius: 50px solid;
	padding: 12px;
	cursor: pointer;
	background:tomato;
	color: #fff;
	transition: 1.2s;

	&:hover{
		background-color:transparent;
			cursor:pointer;
			color:blue;
			transform:scale(1.1);
			text-transform:uppercase;
	}

`;



export const Task = styled.li`
position: relative;
left:10vh;
gap:10px;
	background-color: gray;
	width: 70%;
	padding: 12px;
	font-size: 1.5rem;
	font-weight:bold;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
		
		i {
    font-size: 28px;
    color:${(props) => (props.checked ? "ffffff" : "#00000000000")};

		
  }
	
`;