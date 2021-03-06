module.exports = {
    captainProportional: "The exact multiplier used to compute the damage is proportional to the " +
        "crew's remaining HP and is higher the #1 the HP is. The multiplier is calculated as #2. " +
        "At full health the boost is equal to #3x, with 1 HP left to #4x.",
    captainFixed:"The multiplier is #1 unless #2, in which case it is #3.",
    fixed: "Fixed damage means it entirely bypasses the enemy's defense.",
    gOrbs: "Characters with [G] orbs will deal 1.5x their normal damage. [G] orbs are affected by orb boosters.",
	noFixedPerc: "Specials that deal fixed damage or cut a percentage of the enemy's HP are not " +
        "affected by this captain ability",
    orb: "Orb amplification only affects matching and opposite orbs and works both ways: " +
        "matching orbs will deal #1 more damage and opposite orbs will deal #1 less damage.",
    poison: "Poison deals 0.5x character's ATK in fixed damage at the end of each turn.",
    random: "Estimated random damage range: between #1 HP and #2 HP #3.",
    randomHits: "The target of each of the #1 hits is chosen randomly.",
    specialProportional: "The exact multiplier used to compute the damage is proportional to the " +
        "crew's remaining HP and is higher the #1 the HP is. The multiplier is calculated as: #2.",
    stages: "The special can be used as soon as the first stage is reached.",
    zombie: "The protection only works when attacked by one single enemy and will leave the team with at least 1 HP; " +
        "the effect will not work when attacked by multiples enemies at once.",
    colorAffinity: "'Color Affinity' boosts color type advantages. For example, a STR unit normally deals 2x to a DEX unit and .5x to QCK. With this Color Affinity boost, it will deal (2*#1)x to DEX and (0.5*(#1-1))x to QCK."
};