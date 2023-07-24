import {Family} from "./family.model"

export class Plant {
  plantId: number | null;
  name: string | null;
  species: string | null;
  nativeRegion: string | null;
  createdAt: any | null;
  familyId: number | null;
  family: Family | null;

  constructor(plantId?: number | null, name?: string | null, species?: string | null, nativeRegion?: string | null, createdAt?: any | null, familyId?: number | null, family?: Family | null) {
    this.plantId = plantId || null;
    this.name = name || null;
    this.species = species || null;
    this.nativeRegion = nativeRegion || null;
    this.createdAt = createdAt || null;
    this.familyId =  familyId || null,
    this.family = family || null;
  }
}
