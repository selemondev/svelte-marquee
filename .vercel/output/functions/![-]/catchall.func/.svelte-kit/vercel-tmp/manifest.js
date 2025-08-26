export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.DWNbfja-.js",app:"_app/immutable/entry/app.C-djcq0R.js",imports:["_app/immutable/entry/start.DWNbfja-.js","_app/immutable/chunks/aGTDlQeZ.js","_app/immutable/chunks/CMjRXSMB.js","_app/immutable/chunks/s3UF_jdC.js","_app/immutable/chunks/DptuGF_7.js","_app/immutable/entry/app.C-djcq0R.js","_app/immutable/chunks/C2klKgwi.js","_app/immutable/chunks/s3UF_jdC.js","_app/immutable/chunks/DptuGF_7.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CMjRXSMB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
