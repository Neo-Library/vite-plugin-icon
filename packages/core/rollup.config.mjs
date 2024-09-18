import IconPl from './plugin/index.mjs'

export default ({
    input: 'src/index.ts',
    plugins: [IconPl()],
    output: [
        {
            file: 'buxn.js',
            format: 'es'
        }
    ]
})