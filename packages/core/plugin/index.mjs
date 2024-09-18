export default function myExample() {
    return {
        name: 'my-example', // this name will show up in logs and errors
        resolveId(source) {
            console.log(source,'source')
            if (source === 'virtual-module') {
                // this signals that Rollup should not ask other plugins or check
                // the file system to find this id
                return source;
            }
            // return source
            return null
            // return null; // other ids should be handled as usually
        },
        load(id) {
            console.log(id,'id')
            if (id === 'virtual-module') {
                // the source code for "virtual-module"
                return 'export default "This is virtual!"';
            }
            return null; // other ids should be handled as usually
        }
    };
}
