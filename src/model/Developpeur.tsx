export class Developpeur {
  private _id: number;
  private _nom: string;

  constructor(id: number, nom: string) {
      this._id = id;
      this._nom = nom;
  }

  // Getters
  public get id(): number { return this._id; }
  public get nom(): string { return this._nom; }

  // Setters
  public set id(value: number) { this._id = value; }
  public set nom(value: string) { this._nom = value; }
}