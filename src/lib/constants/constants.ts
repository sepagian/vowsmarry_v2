// src/lib/constants.ts
import type { Option } from '$lib/types';

// --- Categories ---
export const categoryOptions: Option<Category>[] = [
	{
		value: 'accommodation',
		label: 'Accommodation',
		color: 'bg-blue-100 text-blue-800',
		icon: 'i-lucide:bed',
	},
	{
		value: 'catering',
		label: 'Catering',
		color: 'bg-red-100 text-red-800',
		icon: 'i-lucide:utensils',
	},
	{
		value: 'decoration',
		label: 'Decoration',
		color: 'bg-pink-100 text-pink-800',
		icon: 'i-lucide:sparkles',
	},
	{
		value: 'entertainment',
		label: 'Entertainment',
		color: 'bg-purple-100 text-purple-800',
		icon: 'i-lucide:music',
	},
	{
		value: 'makeup-attire',
		label: 'Makeup & Attire',
		color: 'bg-rose-100 text-rose-800',
		icon: 'i-lucide:palette',
	},
	{
		value: 'paperwork',
		label: 'Paperwork',
		color: 'bg-amber-100 text-amber-800',
		icon: 'i-lucide:file-text',
	},
	{
		value: 'photo-video',
		label: 'Photo & Video',
		color: 'bg-green-100 text-green-800',
		icon: 'i-lucide:camera',
	},
	{
		value: 'venue',
		label: 'Venue',
		color: 'bg-indigo-100 text-indigo-800',
		icon: 'i-lucide:map-pin',
	},
	{
		value: 'miscellaneous',
		label: 'Miscellaneous',
		color: 'bg-gray-100 text-gray-800',
		icon: 'i-lucide:more-horizontal',
	},
];

// --- Priorities ---
export const priorityOptions: Option<NonNullable<Task['priority']>>[] = [
	{ value: 'Low', label: 'Low', icon: 'i-lucide:arrow-down', color: 'bg-green-100 text-green-800' },
	{
		value: 'Medium',
		label: 'Medium',
		icon: 'i-lucide:arrow-right',
		color: 'bg-yellow-100 text-yellow-800',
	},
	{ value: 'High', label: 'High', icon: 'i-lucide:arrow-up', color: 'bg-red-100 text-red-800' },
];

// --- Status ---
export const statusOptions: Option<Task['status']>[] = [
	{
		value: 'Pending',
		label: 'Pending',
		icon: 'i-lucide:alarm-clock-minus',
		color: 'bg-gray-200 text-gray-800',
	},
	{
		value: 'On Progress',
		label: 'On Progress',
		icon: 'i-lucide:alarm-clock',
		color: 'bg-yellow-100 text-yellow-800',
	},
	{
		value: 'Completed',
		label: 'Completed',
		icon: 'i-lucide:alarm-clock-check',
		color: 'bg-green-100 text-green-800',
	},
];

// --- Doc Types ---
export const docTypeOptions: Option<DocType>[] = [
	{ value: 'legal-formal', label: 'Legal & Formal', icon: 'i-lucide:scale' },
	{ value: 'vendor-finance', label: 'Vendor & Finance', icon: 'i-lucide:scroll-text' },
	{ value: 'guest-ceremony', label: 'Guest & Ceremony', icon: 'i-lucide:book-open-check' },
	{ value: 'personal-keepsake', label: 'Personal & Keepsake', icon: 'i-lucide:heart' },
];

// --- Expense Status ---
export const expenseStatusOptions: Option<Expense['status']>[] = [
	{ value: 'Paid', label: 'Paid', icon: 'i-lucide:check' },
	{ value: 'Pending', label: 'Pending', icon: 'i-lucide:clock' },
];
