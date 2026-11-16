import { error } from '@sveltejs/kit';
import { blogPosts } from '../../../lib/data';
import type { PageLoad, EntryGenerator } from './$types';

export const load: PageLoad = ({ params }) => {
	const post = blogPosts.find((p) => p.slug === params.slug);
	if (!post) error(404, 'Post not found');
	return { post };
};

export const entries: EntryGenerator = () => blogPosts.map((post) => ({ slug: post.slug }));
