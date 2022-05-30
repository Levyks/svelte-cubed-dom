<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';

	let scCanvas: SC.Canvas;

	import { CSSRenderer, Screen } from 'svelte-cubed-dom';
</script>

<SC.Canvas
	antialias
	background={new THREE.Color('papayawhip')}
	fog={new THREE.FogExp2('papayawhip', 0.1)}
	shadows
	bind:this={scCanvas}
>
	<CSSRenderer {scCanvas}>
		<SC.Group position={[0, -0.5, 0]}>
			<SC.Mesh
				geometry={new THREE.PlaneGeometry(50, 50)}
				material={new THREE.MeshStandardMaterial({ color: 'burlywood' })}
				rotation={[-Math.PI / 2, 0, 0]}
				receiveShadow
			/>
			<SC.Primitive
				object={new THREE.GridHelper(50, 50, 'papayawhip', 'papayawhip')}
				position={[0, 0.001, 0]}
			/>
		</SC.Group>

		<SC.Group>
			<SC.Mesh
				geometry={new THREE.BoxGeometry()}
				material={new THREE.MeshStandardMaterial({ color: 0xeaeaea })}
				scale={[1.2, 1.6, 0.1]}
				castShadow
			/>

			<Screen
				style="width: 1280px; height: 720px; background: white; border: 5px solid black;"
				scale={[0.0008, 0.0008, 0.0008]}
				position={[0, 0.4, 0.06]}
			>
				<main>
					<h1>Hello from</h1>
					<h2>svelte-cubed-dom</h2>

					<div>
						<a href="https://github.com/Levyks/svelte-cubed-dom">GitHub</a>
						<a href="https://www.npmjs.com/package/svelte-cubed-dom">NPM</a>
					</div>

					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/dQw4w9WgXcQ"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				</main>
			</Screen>
		</SC.Group>

		<SC.PerspectiveCamera position={[1, 1, 3]} />
		<SC.OrbitControls maxPolarAngle={Math.PI * 0.51} />
		<SC.AmbientLight intensity={0.6} />
		<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} shadow={{ mapSize: [2048, 2048] }} />
	</CSSRenderer>
</SC.Canvas>

<style>
	main {
		width: 100%;
		text-align: center;
		font-size: 2rem;
	}

	iframe {
		margin: 20px auto;
	}
</style>
