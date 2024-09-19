import ts from 'rollup-plugin-typescript2'
export default ({
    input: 'src/index.ts',
    plugins: [ts()],
    output: [
        {
            file: 'index.js',
            format: 'es'
        }
    ]
})