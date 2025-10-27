/// <reference types="vite/client" />

// Provide a minimal declaration for Leaflet so vue-tsc type-check passes without @types
declare module 'leaflet' {
	const L: any
	export default L
}
