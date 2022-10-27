import { build } from 'esbuild';
import pkg from 'esbuild-plugin-external-global';
const { externalGlobalPlugin } = pkg

build({
    entryPoints: [
        './block.js',
    ],
    outfile: 'block.build.js',
    bundle: true,
    // watch: {
    //     onRebuild(error, result) {
    //         if (error) console.error('watch build failed:', error)
    //         else console.log('watch build succeeded:', result)
    //     },
    // },
    loader: {
        ".js": "jsx",
    },
    sourcemap: false
}).then(() => console.log("⚡ Build complete! ⚡"))
    .catch(() => process.exit(1));