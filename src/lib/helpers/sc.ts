import type * as SC from 'svelte-cubed';
import type { RootContext } from '../typings/sc';

export function getRootFromCanvas(scCanvas: SC.Canvas): RootContext {
	return scCanvas?.$$?.ctx?.[0];
}
