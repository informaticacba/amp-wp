/**
 * Internal dependencies
 */
import { PrePublishPanel } from '../../common/components';

export const name = 'amp-post-featured-image-pre-publish-panel';

// On clicking 'Publish,' display a notice if no featured image exists or its width is too small.
export const render = () => {
	return (
		<PrePublishPanel />
	);
};
