# svelte-cubed-dom

Easily create screens that render DOM elements in svelte-cubed

![Screenshot](https://i.imgur.com/IYMopa2.png)

## Installation

```
npm install svelte-cubed-dom
```

## Usage

### Put a `CSSRenderer` component somewhere in the component three "below" `SC.Canvas`

Pass as it `scCanvas` prop the object binded to the `SC.Canvas` component (this will probably not be needed once [this PR](https://github.com/Rich-Harris/svelte-cubed/pull/17) is merged)

```svelte
<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { CSSRenderer } from 'svelte-cubed-dom';

	let scCanvas: SC.Canvas;
</script>

<SC.Canvas bind:this={scCanvas}>
	<CSSRenderer {scCanvas}>
		<!-- ... -->
	</CSSRenderer>
</SC.Canvas>
```

### Just put a `Screen` component anywhere you need it

```svelte
<script lang="ts">
	import { Screen } from 'svelte-cubed-dom';
</script>

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
```

### Disclaimer

I don't know Three.js that well, so there might be some problems with the approach I've taken. If you have any suggestions, please let me know.
