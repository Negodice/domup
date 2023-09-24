import { widgetOptions } from '@/modules/options'

export const getAgentAvatarUrl = (avatar?: string): string => {
	if (avatar) return `${avatar}?size=80`

	// Default avatar
	const { widgetV3Url } = widgetOptions.getOptions()
	return `${widgetV3Url}/assets/images/default-avatar.png`
}
