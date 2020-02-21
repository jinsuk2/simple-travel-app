import { Navigation } from "react-native-navigation"


const handlePushPop = (name: string, props: any, title: string) => {
    return {
        component: {
            name,
            passProps: {
                // add props here
                text: 'Pushed screen'
            },
            options: {
                topBar: {
                    title: {
                        text: title
                    }
                },
                animations: {
                    push: {
                        enabled: false
                    },
                    pop: {
                        enabled: false
                    }
                }
            }
        }
    }
}

export { handlePushPop }