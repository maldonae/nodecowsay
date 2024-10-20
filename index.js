import cowsay from "cowsay";
import "dotenv/config";
console.log(process.env.NAME);
console.log(process.env.CAMPUS);
console.log(
	cowsay.say({
		text: "I'm a moooodule",
		e: "oO",
		T: "U ",
	}),
);

// or cowsay.think()
