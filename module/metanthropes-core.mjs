/**
 * Metanthropes Early Access Core Module for Foundry VTT
 * Author: qp aka The Orchestrator
 *
 * Throughtout this project, I use the following syntax for comments:
 ** //! Marks a special comment that stands out (in Red) for critical notes.
 ** //* Marks a comment that is used as a section header (in Green) for better visibility.
 ** //? Marks a comment that is used for elaborating my intent (in Blue) for better readability.
 ** //todo Marks a comment that is used for marking (in Orange) potential optimization notes.
 *
 * To get automatic colloring for these comments in VSCode, you can use this extension:
 * aaron-bond.better-comments
 *
 */
Hooks.once("init", async function () {
	//? Metanthropes Status Effects
	const metaStatusEffects = [
		{
			id: "fly",
			name: "Fly",
			flags: {
				metanthropes: {
					metaEffectType: "Buff",
					metaEffectApplication: "Movement",
					metaCycle: null,
					metaRound: null,
					metaStartCycle: null,
					metaStartRound: null,
				},
			},
			changes: [
				{
					key: "system.physical.movement.Buffs.fly.value",
					mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
					value: true,
				},
			],
			description: "<p>Fly</p>",
			icon: "systems/metanthropes/artwork/status-effects/test6.svg",
		},
		{
			id: "photokinetic",
			name: "Photokinetic",
			flags: {
				metanthropes: {
					metaEffectType: "Buff",
					metaEffectApplication: "Movement",
					metaCycle: null,
					metaRound: null,
					metaStartCycle: null,
					metaStartRound: null,
				},
			},
			changes: [
				{
					key: "system.physical.movement.Buffs.photokinetic.value",
					mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
					value: true,
				},
			],
			description: "<p>Photokinetic</p>",
			icon: "systems/metanthropes/artwork/status-effects/test1.svg",
		},
		{
			id: "wallwalk",
			name: "Wall Walk",
			flags: {
				metanthropes: {
					metaEffectType: "Buff",
					metaEffectApplication: "Movement",
					metaCycle: null,
					metaRound: null,
					metaStartCycle: null,
					metaStartRound: null,
				},
			},
			changes: [
				{
					key: "system.physical.movement.Buffs.walk-wall.value",
					mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
					value: true,
				},
			],
			description: "<p>Wall Walk</p>",
			icon: "systems/metanthropes/artwork/status-effects/test2.svg",
		},
		{
			id: "wavewalk",
			name: "Wave Walk",
			flags: {
				metanthropes: {
					metaEffectType: "Buff",
					metaEffectApplication: "Movement",
					metaCycle: null,
					metaRound: null,
					metaStartCycle: null,
					metaStartRound: null,
				},
			},
			changes: [
				{
					key: "system.physical.movement.Buffs.walk-wave.value",
					mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
					value: true,
				},
			],
			description: "<p>Wave Walk</p>",
			icon: "systems/metanthropes/artwork/status-effects/test3.svg",
		},
	];
	CONFIG.statusEffects.push(...metaStatusEffects);
	//? Core Module Settings
	game.settings.register("metanthropes", "metaCore", {
		name: "Enable Core Features",
		hint: `
		Enable this setting to gain access to the core Module Features.
		`,
		scope: "world", //? This specifies if it's a client-side setting
		config: true, //? This makes the setting appear in the module configuration
		requiresReload: true, //? If true, a client reload (F5) is required to activate the setting
		type: Boolean,
		default: true,
		onChange: (value) => {
			//? Do something when the setting is changed, if necessary
		},
	});
});
