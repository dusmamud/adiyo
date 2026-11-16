import { error } from '@sveltejs/kit';
import { caseStudies } from '../../../lib/data';
import type { PageLoad, EntryGenerator } from './$types';

export const load: PageLoad = ({ params }) => {
	const study = caseStudies.find((c) => c.slug === params.slug);
	if (!study) error(404, 'Customer story not found');
	return { study };
};

export const entries: EntryGenerator = () => caseStudies.map((study) => ({ slug: study.slug }));
