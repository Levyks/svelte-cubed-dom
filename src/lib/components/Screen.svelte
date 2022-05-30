<script lang="ts">
	import { onMount } from 'svelte';

	import * as SC from 'svelte-cubed';
	import * as THREE from 'three';

	import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';

	import { get_root } from '../helpers/context';

	export let style: string = '';
	export let userSelect: string = 'none';

	export let scale: SC.Scale | undefined = undefined;
	export let position: SC.Position | undefined = undefined;
	export let rotation: SC.Rotation | undefined = undefined;

	let screenObj: CSS3DObject;
	let hitbox: THREE.Mesh;

	let hitboxWorldPos: THREE.Vector3;
	let raycaster: THREE.Raycaster;

	let screenDom: HTMLDivElement;

	let hide: boolean = false;
	let mounted: boolean = false;

	const root = get_root();

	$: if (screenObj) screenObj.element.style.userSelect = userSelect;

	onMount(() => {
		hitbox = new THREE.Mesh(
			new THREE.BoxGeometry(),
			new THREE.MeshBasicMaterial({ color: 0x00ff00 })
		);
		hitbox.name = 'hitbox';

		screenObj = new CSS3DObject(screenDom);
		screenObj.name = 'screen';

		hitboxWorldPos = new THREE.Vector3();
		raycaster = new THREE.Raycaster();

		mounted = true;
	});

	export function isVisible(): boolean {
		if (!mounted) return false;

		hitbox.getWorldPosition(hitboxWorldPos);
		raycaster.set(
			root.camera.object.position,
			hitboxWorldPos.clone().sub(root.camera.object.position).normalize()
		);

		const intersections = raycaster.intersectObject(root.scene, true);

		return intersections.find((i) => i.face)?.object?.uuid === hitbox.uuid;
	}

	SC.onFrame(() => {
		hide = !isVisible();
	});
</script>

{#if mounted}
	<SC.Group {scale} {position} {rotation}>
		<SC.Primitive object={screenObj} />
		<SC.Primitive object={hitbox} position={[0, 0, -1]} />
	</SC.Group>
{/if}

<div class="screen" bind:this={screenDom} {style} class:hide>
	<slot />
</div>

<style>
	.hide {
		display: none;
	}
</style>
