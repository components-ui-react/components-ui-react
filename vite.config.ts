import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		dts({
			insertTypesEntry: true
		}),
		react()
	],
	build: {
		lib: {
			entry: "src/index.tsx",
			fileName: "index",
			name: "react-lib",
			formats: ["es", "umd"]
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM"
				}
			}
		}
	}
});
