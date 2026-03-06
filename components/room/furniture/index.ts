"use client";

import type React from "react";
import type { FurnitureProps } from "./types";

import BedBasic from "./BedBasic";
import Nightstand from "./Nightstand";
import LampFloor from "./LampFloor";
import Wardrobe from "./Wardrobe";
import Couch from "./Couch";
import TvStand from "./TvStand";
import Bookshelf from "./Bookshelf";
import PlantBig from "./PlantBig";
import Fridge from "./Fridge";
import Desk from "./Desk";
import BedDouble from "./BedDouble";
import CoffeeTable from "./CoffeeTable";
import Fireplace from "./Fireplace";
import Aquarium from "./Aquarium";
import Stove from "./Stove";
import Bathtub from "./Bathtub";
import Toilet from "./Toilet";
import Sink from "./Sink";
import RugRound from "./RugRound";
import KitchenTable from "./KitchenTable";
import Counter from "./Counter";
import Bench from "./Bench";
import Fountain from "./Fountain";
import Tree from "./Tree";
import Flowerbed from "./Flowerbed";

export type { FurnitureProps } from "./types";

export const FURNITURE_COMPONENTS: Record<string, React.FC<FurnitureProps>> = {
  bed_basic: BedBasic,
  nightstand: Nightstand,
  lamp_floor: LampFloor,
  wardrobe: Wardrobe,
  couch: Couch,
  tv_stand: TvStand,
  bookshelf: Bookshelf,
  plant_big: PlantBig,
  fridge: Fridge,
  desk: Desk,
  bed_double: BedDouble,
  coffee_table: CoffeeTable,
  fireplace: Fireplace,
  aquarium: Aquarium,
  stove: Stove,
  bathtub: Bathtub,
  toilet: Toilet,
  sink: Sink,
  rug_round: RugRound,
  kitchen_table: KitchenTable,
  counter: Counter,
  bench: Bench,
  fountain: Fountain,
  tree: Tree,
  flowerbed: Flowerbed,
};
