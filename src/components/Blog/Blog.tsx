import { Banner } from '../Banner';
import { BlogNew } from './New';

import './Blog.scss';

export const Blog = () => {
	return (
		<div className="blog">
			<BlogNew />

			<Banner />
		</div>
	);
};
