// Default avatar colors — used when no skin/clothing is equipped
// Single source of truth for AvatarCompanion + Sky Climb Character + Ghost avatar

export const AVATAR_DEFAULTS = {
  skinColor: '#f0d0a8',      // head & limbs (warm peach)
  outfitColor: '#7a9dbd',    // torso/body (blue-ish)
  legColor: '#3a5a8a',       // pants/legs
  shoeColor: '#5a3820',      // shoes (brown)
  hairColor: '#5c3a18',      // hair (warm chestnut)
  armColor: '#f0d0a8',       // bare arms = skin color
} as const;
