import { Developpeur } from "./Developpeur";

export class Jeu {
    private _id: number;
    private _nom: string;
    private _dateSortie: string;
    private _note: number;
    private _imageUrl: string;
    private _developpeur: Developpeur[];
    private _editeurs: string[];
    private _genres: string[];
    private _plateformes: string[];
    private _ranking: number;
    private _synopsis: string;
    private _multijoueur: boolean;
    private _cooperatif: boolean;
    private _solo: boolean;
    private _goty: boolean;

    constructor(
        idJeu: number, nomJeu: string, dateSortie: string, note: number, imageUrl: string, developpeur: Developpeur[],
        editeurs: string[], genres: string[], plateformes: string[], ranking: number, synopsis: string,
        multijoueur: boolean, cooperatif: boolean, solo: boolean, goty: boolean) {
        this._id = idJeu;
        this._nom = nomJeu;
        this._dateSortie = dateSortie;
        this._note = note;
        this._imageUrl = imageUrl;
        this._developpeur = developpeur;
        this._editeurs = editeurs;
        this._genres = genres;
        this._plateformes = plateformes;
        this._ranking = ranking;
        this._synopsis = synopsis;
        this._multijoueur = multijoueur;
        this._cooperatif = cooperatif;
        this._solo = solo;
        this._goty = goty;
  }

     // Getters
  public get id(): number { return this._id; }

  public get nom(): string { return this._nom; }

  public get dateSortie(): string { return this._dateSortie; }

  public get note(): number { return this._note; }

  public get imageUrl(): string { return this._imageUrl; }

  public get developpeur(): Developpeur[] { return this._developpeur; }

  public get editeurs(): string[] { return this._editeurs; }

  public get genres(): string[] { return this._genres; }

  public get plateformes(): string[] { return this._plateformes; }

  public get ranking(): number { return this._ranking; }

  public get synopsis(): string { return this._synopsis; }

  public get multijoueur(): boolean { return this._multijoueur; }

  public get cooperatif(): boolean { return this._cooperatif; }

  public get solo(): boolean { return this._solo; }

  public get goty(): boolean { return this._goty; }

  // Setters
  public set id(value: number) { this._id = value; }

  public set nom(value: string) { this._nom = value; }

  public set dateSortie(value: string) { this._dateSortie = value; }

  public set note(value: number) { this._note = value; }

  public set imageUrl(value: string) { this._imageUrl = value; }

  public set developpeur(value: Developpeur[]) { this._developpeur = value; }

  public set editeurs(value: string[]) { this._editeurs = value; }

  public set genres(value: string[]) { this._genres = value; }

  public set plateformes(value: string[]) { this._plateformes = value; }

  public set ranking(value: number) { this._ranking = value; }
}