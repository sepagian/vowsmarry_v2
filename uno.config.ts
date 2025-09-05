import {
	defineConfig,
	presetWind4,
	presetIcons,
	presetAttributify,
	presetTypography,
	presetWebFonts,
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';
import { builtinColors, presetShadcn } from 'unocss-preset-shadcn';
import { presetAnimations } from 'unocss-preset-animations';

export default defineConfig({
	presets: [
		presetWind4(),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			},
			collections: {
				lucide: () => import('@iconify-json/lucide/icons.json').then((i) => i.default)
			}
		}),
		presetAttributify(),
		presetTypography(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: 'Rethink Sans',
				serif: 'Instrument Serif',
				mono: 'Fira Code'
			}
		}),
		presetAnimations(),
		presetShadcn(builtinColors.map((c) => ({ color: c })))
	],
	transformers: [transformerDirectives(), transformerVariantGroup(), transformerCompileClass()]
});
