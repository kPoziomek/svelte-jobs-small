<script lang="ts">
	import { MapPin } from '@lucide/svelte';
	import { goto, invalidateAll } from '$app/navigation';
	import { Jumper } from 'svelte-loading-spinners';
	import { Circle } from 'lucide-svelte';
	import { page } from '$app/state';
	import toast from 'svelte-french-toast';

	const form = $state({
		type: page.data.job.type,
		title: page.data.job.title,
		description: page.data.job.description,
		salary: page.data.job.salary,
		location: page.data.job.location,
		company: {
			name: page.data.job.company.name,
			description: page.data.job.company.description,
			contactEmail: page.data.job.company.contactEmail,
			contactPhone: page.data.job.company.contactPhone
		}
	});
	const handleSubmit = async () => {
		try {
			const response = await fetch(`/api/jobs/${page.data.job.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(form)
			});
			if (!response.ok) {
				throw new Error('Failed to update job');
			}
			const data = await response.json();
			toast.success('Job updated successfully!');
			invalidateAll();
			goto(`/job/${data.id}`);
		} catch (error) {
			toast.error('Error updating job');
			console.error('Error updating job:', error);
		}
	};
</script>

<section class="bg-green-50">
	<div class="container m-auto max-w-2xl py-24">
		<div class="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0">
			<form onsubmit={handleSubmit}>
				<h2 class="mb-6 text-center text-3xl font-semibold">Update Job</h2>

				<div class="mb-4">
					<label for="type" class="mb-2 block font-bold text-gray-700">Job Type</label>
					<select
						bind:value={form.type}
						id="type"
						name="type"
						class="w-full rounded border px-3 py-2"
						required
					>
						<option value="Full-Time">Full-Time</option>
						<option value="Part-Time">Part-Time</option>
						<option value="Remote">Remote</option>
						<option value="Internship">Internship</option>
					</select>
				</div>

				<div class="mb-4">
					<label class="mb-2 block font-bold text-gray-700">Job Listing Name</label>
					<input
						bind:value={form.title}
						type="text"
						id="name"
						name="name"
						class="mb-2 w-full rounded border px-3 py-2"
						placeholder="eg. Beautiful Apartment In Miami"
						required
					/>
				</div>
				<div class="mb-4">
					<label for="description" class="mb-2 block font-bold text-gray-700">Description</label>
					<textarea
						bind:value={form.description}
						id="description"
						name="description"
						class="w-full rounded border px-3 py-2"
						rows="4"
						placeholder="Add any job duties, expectations, requirements, etc"
					></textarea>
				</div>

				<div class="mb-4">
					<label for="type" class="mb-2 block font-bold text-gray-700">Salary</label>
					<select
						bind:value={form.salary}
						id="salary"
						name="salary"
						class="w-full rounded border px-3 py-2"
						required
					>
						<option value="Under $50K">under $50K</option>
						<option value="$50K - $60K">$50 - $60K</option>
						<option value="$60K - $70K">$60 - $70K</option>
						<option value="$70K - $80K">$70 - $80K</option>
						<option value="$80K - $90K">$80 - $90K</option>
						<option value="$90K - $100K">$90 - $100K</option>
						<option value="$100K - $125K">$100 - $125K</option>
						<option value="$125K - $150K">$125 - $150K</option>
						<option value="$150K - $175K">$150 - $175K</option>
						<option value="$175K - $200K">$175 - $200K</option>
						<option value="Over $200K">Over $200K</option>
					</select>
				</div>

				<div class="mb-4">
					<label class="mb-2 block font-bold text-gray-700"> Location </label>
					<input
						bind:value={form.location}
						type="text"
						id="location"
						name="location"
						class="mb-2 w-full rounded border px-3 py-2"
						placeholder="Company Location"
						required
					/>
				</div>

				<h3 class="mb-5 text-2xl">Company Info</h3>

				<div class="mb-4">
					<label for="company" class="mb-2 block font-bold text-gray-700">Company Name</label>
					<input
						bind:value={form.company.name}
						type="text"
						id="company"
						name="company"
						class="w-full rounded border px-3 py-2"
						placeholder="Company Name"
					/>
				</div>

				<div class="mb-4">
					<label for="company_description" class="mb-2 block font-bold text-gray-700"
						>Company Description</label
					>
					<textarea
						bind:value={form.company.description}
						id="company_description"
						name="company_description"
						class="w-full rounded border px-3 py-2"
						rows="4"
						placeholder="What does your company do?"
					></textarea>
				</div>

				<div class="mb-4">
					<label for="contact_email" class="mb-2 block font-bold text-gray-700">Contact Email</label
					>
					<input
						bind:value={form.company.contactEmail}
						type="email"
						id="contact_email"
						name="contact_email"
						class="w-full rounded border px-3 py-2"
						placeholder="Email address for applicants"
						required
					/>
				</div>
				<div class="mb-4">
					<label for="contact_phone" class="mb-2 block font-bold text-gray-700">Contact Phone</label
					>
					<input
						bind:value={form.company.contactPhone}
						type="tel"
						id="contact_phone"
						name="contact_phone"
						class="w-full rounded border px-3 py-2"
						placeholder="Optional phone for applicants"
					/>
				</div>

				<div>
					<button
						class="focus:shadow-outline w-full rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none"
						type="submit"
					>
						Update Job
					</button>
				</div>
			</form>
		</div>
	</div>
</section>
