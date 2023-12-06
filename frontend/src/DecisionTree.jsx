import React from "react";
import axios from "axios";
import { useState } from "react";

function PostForm() {
	const url = "http://localhost:5000/decision";
	const [data, setData] = useState({
		premiscd: "",
		rptdn: "",
		crmcd: "",
		weaponused: "",
		hour: "",
	});
	function submit(e) {
		e.preventDefault();
		axios
			.post(url, {
				premiscd: data.premiscd,
				rptdn: data.rptdn,
				crmcd: data.crmcd,
				weaponused: data.weaponused,
				hour: data.hour,
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
					id="premiscd"
					placeholder="Premise Code"
					type="text"
					onChange={(e) => handle(e)}
				></input>
				<input
					id="crmcd"
					placeholder="Crime Code"
					type="text"
					onChange={(e) => handle(e)}
				></input>
				<input
					id="rptdn"
					placeholder="Reported District Number"
					type="text"
					onChange={(e) => handle(e)}
				></input>
				<input
					id="weaponused"
					placeholder="Weapon Used Cd"
					type="text"
					onChange={(e) => handle(e)}
				></input>
				<input
					id="hour"
					placeholder="Hour"
					type="text"
					onChange={(e) => handle(e)}
				></input>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default PostForm;
