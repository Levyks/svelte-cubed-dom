import { getContext, setContext } from 'svelte';
import type { RootContext } from '../typings/sc';

const ROOT_KEY = {};

export function get_root(): RootContext {
	return getContext(ROOT_KEY);
}

export function set_root(context: RootContext) {
	setContext(ROOT_KEY, context);
	return context;
}
