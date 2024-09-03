export interface User {
	name: string;
	age?: number;
	// enum
	status: "active" | "inactive";
	address: Address;
}

export interface Address {
	street: string;
	city: string;
	zip?: string;
}
