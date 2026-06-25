import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';


export default defineConfig(({ mode }) => ({
    plugins: [sveltekit()],
    test: {
        exclude: [
            'node_modules/**',
            'dist/**',
            'test/cms/e2e/**',
            'playwright/**'
        ],
        environment: "node",
        env: loadEnv(mode, process.cwd(), ''),
    }
}));
