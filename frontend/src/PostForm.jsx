import React from "react";
import axios from "axios";
import { useState } from "react";

function PostForm() {
	const url = "http://localhost:5000/predict";
	const [data, setData] = useState({
		area: "",
		victage: "",
		victsex: "",
		weaponused: "",
	});
	function submit(e) {
		e.preventDefault();
		axios
			.post(url, {
				area: data.area,
				victage: data.victage,
				victsex: data.victsex,
				weaponused: data.weaponused,
			})
			.then((res) => {
				console.log(res.data);
			});
	}
	function handle(e) {
		const newdata = { ...data };
		newdata[e.target.id] = e.target.value;
		setData(newdata);
		console.log(newdata);
	}
	return (
		<div>
			<form onSubmit={(e) => submit(e)}>
				<input
					id="area"
					placeholder="AREA"
					type="text"
					onChange={(e) => handle(e)}
				></input>
				<input
					id="victage"
					placeholder="Vict Age"
					type="text"
					onChange={(e) => handle(e)}
				></input>
				<input
					id="victsex"
					placeholder="Vict Sex"
					type="text"
					onChange={(e) => handle(e)}
				></input>
				<input
					id="weaponused"
					placeholder="Weapon Used Cd"
					type="text"
					onChange={(e) => handle(e)}
				></input>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default PostForm;
