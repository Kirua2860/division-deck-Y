// Raretés et probabilités de tirage.
// rarity : common | rare | epic | legendary | mythic
const RARITIES = {
  common:    { label: "Commune",    weight: 65, order: 0 },
  rare:      { label: "Rare",       weight: 22, order: 1 },
  epic:      { label: "Épique",     weight: 10, order: 2 },
  legendary: { label: "Légendaire", weight: 3, order: 3 },
  mythic:    { label: "Mythique",   weight: 1, order: 4 },
};

// Le site ne crée aucune carte : tout le catalogue est créé par les admins (espace admin).
const DEFAULT_CARDS = [];

module.exports = { DEFAULT_CARDS, RARITIES };
