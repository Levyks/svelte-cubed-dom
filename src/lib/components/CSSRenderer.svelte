<script lang="ts">
	import { onMount } from 'svelte';
	import * as SC from 'svelte-cubed';

	import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer';

	import { getRootFromCanvas } from '../helpers/sc';
	import { set_root } from '../helpers/context';
	import type { RootContext } from '../typings/sc';

	export let scCanvas: SC.Canvas;

	let renderer: CSS3DRenderer;
	let scRoot: RootContext;

	$: {
		scRoot = getRootFromCanvas(scCanvas);
		if (scRoot) set_root(scRoot);
	}

	onMount(() => {
		if (!scCanvas) throw new Error('Instance of SC.Canvas not provided/is falsy');
		renderer = new CSS3DRenderer();
		resize();
		renderer.domElement.style.pointerEvents = 'none';
		scRoot.canvas.parentElement!.appendChild(renderer.domElement);
	});

	function resize() {
		renderer.setSize(scRoot.canvas.width, scRoot.canvas.height);
	}

	SC.onFrame(() => {
		renderer.render(scRoot.scene, scRoot.camera.object);
	});
</script>

<svelte:window on:resize={resize} />

<slot />
