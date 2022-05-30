import type * as THREE from 'three';

export type RootContext = {
	canvas: HTMLCanvasElement;
	scene: THREE.Scene;
	renderer: THREE.WebGLRenderer;

	camera: {
		object: THREE.Camera;
		callback: (w: number, h: number) => void;
		set: (camera: THREE.Camera, callback: (w: number, h: number) => void) => void;
	};

	controls: {
		object: THREE.EventDispatcher;
		callback: (camera: THREE.Camera, canvas: HTMLCanvasElement) => THREE.EventDispatcher;
		set: (
			callback: (camera: THREE.Camera, canvas: HTMLCanvasElement) => THREE.EventDispatcher
		) => void;
	};

	before_render: (fn: () => void) => void;

	invalidate: () => void;
};
