import logo from './logo.svg';
import './App.css';
import './App.css';

import 'semantic-ui-css/semantic.min.css';
import { Button, Form } from 'semantic-ui-react';
import { states } from './states.js';
import { countries } from './countries.js';
	

function App() {
  return (
	<Form>
		<Form.Field>
			<label>First Name</label>
			<input placeholder='First Name' />
		</Form.Field>
		
		<Form.Field>
			<label>Last Name</label>
			<input placeholder='Last Name' />
		</Form.Field>
		
		<Form.Field>
			<label>Street Address</label>
			<input placeholder='Street Address' />
		</Form.Field>		
		
		<Form.Field>
			<label>City</label>
			<input placeholder='City' />
		</Form.Field>

		<Form.Field label='State' control='select'>
			{states.map((state) => (
				<option value={state.abbreviation}>{state.name}</option>
			))}
		</Form.Field>	

		<Form.Field label='Country' control='select'>
			{countries.map((country) => (
				<option value={country.code}>{country.name}</option>
			))}
		</Form.Field>

		<Button type='submit'>Submit</Button>
	</Form>
  );
}

export default App;
