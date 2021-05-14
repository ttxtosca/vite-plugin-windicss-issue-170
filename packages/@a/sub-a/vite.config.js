import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

export default {
	plugins: [
		Vue({
			include: [/\.vue$/],
		}),
		WindiCSS({
			// scan: {
			// 	dirs: ['.', '../../@b/sub-b/lib'],
			// 	fileExtensions: ['vue', 'js'],
			// },
		}),
	],
	optimizeDeps: {
		include: [
			'vue',
		],
	},
	server: {
		watch: {
			usePolling: true,
		}
		// force: true,
		// strict: true,
		// fsServe: {
		// 	root: '../..'
		// }
	}
};
