// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	type Category =
		| 'accommodation'
		| 'catering'
		| 'decoration'
		| 'entertainment'
		| 'makeup-attire'
		| 'paperwork'
		| 'photo-video'
		| 'venue'
		| 'miscellaneous';

	type Task = {
		id: string;
		title: string;
		description?: string;
		category: (typeof Category)[number];
		priority?: 'Low' | 'Medium' | 'High';
		status: 'Pending' | 'On Progress' | 'Completed';
	};
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
