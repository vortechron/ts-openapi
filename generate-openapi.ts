import { makeConverter, getTypeScriptReader, getOpenApiWriter } from "typeconv";
import * as fs from "fs";

async function generateOpenApi() {
	const reader = getTypeScriptReader();
	const writer = getOpenApiWriter({
		format: "yaml",
		title: "User API",
		version: "1.0.0",
		schemaVersion: "3.0.0",
	});

	const { convert } = makeConverter(reader, writer);

	const { data } = await convert({
		data: fs.readFileSync("src/generated.d.ts", "utf-8"),
	});

	fs.writeFileSync("openapi.yaml", data);
}

generateOpenApi();
