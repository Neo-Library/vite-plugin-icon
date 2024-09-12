import {
    setupDevtoolsPlugin
} from '@vue/devtools-api'
export const icons = {

}

export const loadDevtools = (app: any) => {
    setupDevtoolsPlugin({
        id: 'neo.vuejs.icon',
        app,
        label: 'Icons'
    }, api => {

    })


}