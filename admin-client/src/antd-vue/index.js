
// 按需引入组件
import {Button, Result } from 'ant-design-vue'

const components = [
	Button,
	Result
]

export function setupAntd(app) {
	components.forEach(component => {
		app.use(component)
	})
}
