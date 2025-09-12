export const categoryColors: { value: Task['category']; color: string }[] = [
	{ value: 'accommodation', color: 'bg-blue-100 text-blue-800' },
	{ value: 'catering', color: 'bg-red-100 text-red-800' },
	{ value: 'decoration', color: 'bg-pink-100 text-pink-800' },
	{ value: 'entertainment', color: 'bg-purple-100 text-purple-800' },
	{ value: 'makeup-attire', color: 'bg-rose-100 text-rose-800' },
	{ value: 'paperwork', color: 'bg-amber-100 text-amber-800' },
	{ value: 'photo-video', color: 'bg-green-100 text-green-800' },
	{ value: 'venue', color: 'bg-indigo-100 text-indigo-800' },
	{ value: 'miscellaneous', color: 'bg-gray-100 text-gray-800' },
];

export const statusOptions: { value: Task['status']; color: string; icon: string }[] = [
	{ value: 'Completed', color: 'bg-green-600 text-white', icon: 'i-lucide:alarm-clock-check' },
	{
		value: 'Pending',
		color: 'bg-yellow-100 text-yellow-800',
		icon: 'i-lucide:alarm-clock-minus',
	},
	{ value: 'On Progress', color: 'bg-sky-200 text-sky-800', icon: 'i-lucide:alarm-clock' },
];

export const priorityColors: { value: Task['priority']; color: string; icon: string }[] = [
	{ value: 'Low', color: 'bg-green-100 text-green-800', icon: 'i-lucide:arrow-down' },
	{ value: 'Medium', color: 'bg-yellow-100 text-yellow-800', icon: 'i-lucide:arrow-right' },
	{ value: 'High', color: 'bg-red-100 text-red-800', icon: 'i-lucide:arrow-up' },
];

export const typeOptions: {
	value: DocType;
	label: string;
	icon: string;
}[] = [
	{ value: 'legal-formal', label: 'Legal & Formal', icon: 'i-lucide:scale' },
	{ value: 'vendor-finance', label: 'Vendor & Finance', icon: 'i-lucide:scroll-text' },
	{ value: 'guest-ceremony', label: 'Guest & Ceremony', icon: 'i-lucide:book-open-check' },
	{ value: 'personal-keepsake', label: 'Personal & Keepsake', icon: 'i-lucide:heart' },
];
