import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

export default {
	plugins: [
		Vue({
			include: [/\.vue$/],
		}),
		WindiCSS({
			// scan: {
			// 	dirs: ['.', '../../@tosca/client/lib'],
			// 	fileExtensions: ['vue', 'js'],
			// },
		}),
	],
	optimizeDeps: {
		include: [
			'vue',
		],
	},
};
