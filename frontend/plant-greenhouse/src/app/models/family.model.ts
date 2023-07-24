export class Family {
  familyId: number | null;
  name: string | null;

  constructor(familyId?: number | null, name?: string | null) {
    this.familyId = familyId || null;
    this.name = name || null;
  }
}
